<script setup lang="ts">
import { ref, computed } from 'vue';
import MiniSearch from 'minisearch';
import type { MyblogCollectionItem } from '~/content.config';

type BlogContentItem = MyblogCollectionItem

const rawPosts = await queryCollection("myblog")
    .where("published", "=", true)
    .order("date", "DESC")
    .all();

const allPosts: BlogContentItem[] = rawPosts.map(post => ({
    ...post,
    date: new Date(post.date as string),
    path: post.path as string,
}));

useHead({
    title: 'Blogs Archive',
    meta: [
        {
            name: 'description',
            content: 'This is the place where you can find all the blog posts I have written & published on this site.',
        },
    ],
});

// Initialize MiniSearch with the correct combined type
const miniSearch = new MiniSearch<BlogContentItem>({
    fields: ['title', 'description', 'tags', 'date'],
    storeFields: ['title', 'description', 'tags', 'date', 'path'],
    idField: 'path',
});

miniSearch.addAll(allPosts);

const searchTerm = ref('');
const viewMode = ref<'list' | 'grouped'>('list');

const filteredPosts = computed<BlogContentItem[]>(() => {
    if (!searchTerm.value) {
        return allPosts; // If no search term, return all posts
    }
    // Perform search with prefix and fuzzy matching for better results
    const results = miniSearch.search(searchTerm.value, {
        prefix: true, // Allow partial matches at the beginning of words
        fuzzy: 0.2,   // Allow some typos (e.g., 1 typo for every 5 characters)
    });

    // Map the search results back to the original full post objects using 'path'
    const resultPaths = new Set(results.map(result => result.path));
    return allPosts.filter(post => resultPaths.has(post.path));
});

const groupedPosts = computed(() => {
    const groups: Record<string, Record<string, BlogContentItem[]>> = {}; // Year -> MonthName -> Posts

    filteredPosts.value.forEach(post => {
        const year = post.date.getFullYear().toString();
        const monthName = post.date.toLocaleString('en-US', { month: 'long' });

        if (!groups[year]) {
            groups[year] = {};
        }
        if (!groups[year][monthName]) {
            groups[year][monthName] = [];
        }
        groups[year][monthName].push(post);
    });
    return groups;
});
</script>

<template>
    <div>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <input
                type="text"
                v-model="searchTerm"
                placeholder="Search blogs by title, description, tags, or date..."
                class="w-full sm:w-auto flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
                v-model="viewMode"
                class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="list">List View</option>
                <option value="grouped">Grouped View</option>
            </select>
        </div>

        <div v-if="filteredPosts.length > 0">
            <!-- List View -->
            <ol v-if="viewMode === 'list'">
                <li v-for="post in filteredPosts" :key="post.path" class="mb-4 p-2 border-b border-gray-200">
                    <NuxtLink :to="post.path" class="text-lg font-semibold text-blue-600 hover:underline">{{ post.title }}</NuxtLink>
                    <p v-if="post.description" class="text-gray-700 text-sm mt-1">{{ post.description }}</p>
                    <p class="text-gray-500 text-xs mt-1">Date: {{ post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                    <p v-if="post.tags && post.tags.length" class="text-gray-500 text-xs mt-1">Tags: {{ post.tags.join(', ') }}</p>
                </li>
            </ol>

            <!-- Grouped View -->
            <div v-else-if="viewMode === 'grouped'">
                <div v-for="year in Object.keys(groupedPosts).sort((a, b) => parseInt(b) - parseInt(a))" :key="year">
                    <h2 class="text-xl font-bold mt-6 mb-3">{{ year }}</h2>
                    <div v-for="month in Object.keys(groupedPosts[year]).sort((a, b) => new Date(`1 ${b} 2000`).getMonth() - new Date(`1 ${a} 2000`).getMonth())" :key="month">
                        <h3 class="text-lg font-semibold mt-4 mb-2">{{ month }}</h3>
                        <ol>
                            <li v-for="post in groupedPosts[year][month].sort((a, b) => b.date.getTime() - a.date.getTime())" :key="post.path" class="mb-4 p-2 border-b border-gray-200">
                                <NuxtLink :to="post.path" class="text-lg font-semibold text-blue-600 hover:underline">{{ post.title }}</NuxtLink>
                                <p v-if="post.description" class="text-gray-700 text-sm mt-1">{{ post.description }}</p>
                                <p class="text-gray-500 text-xs mt-1">Date: {{ post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                                <p v-if="post.tags && post.tags.length" class="text-gray-500 text-xs mt-1">Tags: {{ post.tags.join(', ') }}</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <p v-else-if="searchTerm" class="text-gray-600">No results found for "{{ searchTerm }}".</p>
        <p v-else class="text-gray-600">No blog posts published yet.</p>
    </div>
</template>

<style scoped>
/* holder */
</style>
