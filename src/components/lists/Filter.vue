
<script setup lang="ts">

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { reactive, watch } from 'vue'
import Dropdown from 'primevue/dropdown'

import QUERY from '@/data/Tech/index'
import type { ProjetoDTO } from '@/data/Projetos'
import type { ListFilter } from '@/data/types'

interface Props {
    filter?: ListFilter
    items?: ProjetoDTO[]
    setData: (data: ProjetoDTO[]) => void
    showFilters?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    filter: undefined,
    items: () => [],
    setData: () => {},
    showFilters: true,
})

// ====================================
// FILTER OPTIONS (todas do sistema)
// ====================================

interface option {
    label: string;
    value: string | null;
}

function getOptions(query: any[]) {
    return query.map((item) => ({
        label: item.nickname || "Undefined",
        value: item.nickname || "Undefined"
    } as option))
}

const Options_Languages = getOptions(QUERY.getLanguages())
const Options_Runtimes = getOptions(QUERY.getRuntimes())
const Options_Databases = getOptions(QUERY.getDatabases())
const Options_Frameworks = getOptions(QUERY.getFrameworks())
const Options_Libraries = getOptions(QUERY.getLibraries())
const Options_Tools = getOptions(QUERY.getTools())
const Options_CloudPlatforms = getOptions(QUERY.getCloudPlatforms())
const Options_Plataforms = getOptions(QUERY.getPlatforms())

interface filterOption {
    key: string;
    label: string;
    options: option[];
}

const filterOptions: filterOption[] = [
    { key: 'language', label: t('common.languages'), options: Options_Languages },
    { key: 'runtime', label: t('common.runtimes'), options: Options_Runtimes },
    { key: 'database', label: t('common.databases'), options: Options_Databases },
    { key: 'framework', label: t('common.frameworks'), options: Options_Frameworks },
    { key: 'library', label: t('common.libraries'), options: Options_Libraries },
    { key: 'tool', label: t('common.tools'), options: Options_Tools },
    { key: 'cloudPlatform', label: t('common.cloudPlatforms'), options: Options_CloudPlatforms },
    { key: 'plataform', label: t('common.plataforms'), options: Options_Plataforms },
]

// ====================================
// SELECTED FILTERS (estado dos dropdowns)
// ====================================

const selectedFilters = reactive<ListFilter>({})

// ====================================
// FILTERING LOGIC
// ====================================

/** Verifica se um projeto possui uma tecnologia com o nickname dado */
function projectHasTech(project: ProjetoDTO, key: keyof ListFilter, value: string): boolean {
    if (!project) return false

    const techArrayMap: Record<string, string> = {
        language: 'languages',
        runtime: 'runtimes',
        database: 'databases',
        framework: 'framework',
        library: 'libraries',
        tool: 'tools',
        cloudPlatform: 'cloudPlatforms',
        plataform: 'platforms',
    }

    const arrayKey = techArrayMap[key]
    if (!arrayKey) return false

    const arr = (project as any)[arrayKey] as any[] | undefined
    return arr?.some((item: any) => item?.nickname === value) ?? false
}

/** Aplica pré-filtro (props.filter) + seleções do usuário sobre os items */
function applyFilters(items: ProjetoDTO[]): ProjetoDTO[] {
    let result = [...items]

    // Merge: pré-filtro + seleções do usuário (seleções sobrescrevem se ambas existirem)
    const merged: ListFilter = {
        ...props.filter,
        ...Object.fromEntries(
            Object.entries(selectedFilters).filter(([_, v]) => v !== undefined)
        ),
    }

    // Filtro featured
    if (merged.featured !== undefined) {
        result = result.filter(p => p && p.featured === merged.featured)
    }

    // Filtros de tecnologia
    const techKeys: (keyof ListFilter)[] = [
        'language', 'runtime', 'database', 'framework',
        'library', 'tool', 'cloudPlatform', 'plataform',
    ]

    for (const key of techKeys) {
        const value = merged[key]
        if (value && typeof value === 'string') {
            result = result.filter(p => projectHasTech(p, key, value))
        }
    }

    // Filtro search (futuro)
    if (merged.search && merged.search.trim()) {
        const query = merged.search.toLowerCase()
        result = result.filter(p => {
            if (!p) return false
            return (
                p.title.toLowerCase().includes(query) ||
                p.summary.pt.toLowerCase().includes(query) ||
                p.summary.en.toLowerCase().includes(query)
            )
        })
    }

    return result
}

//* Watch items, pré-filtro e seleções — refiltra e devolve via setData
watch(
    [() => props.items, () => props.filter, selectedFilters],
    () => {
        const filtered = applyFilters(props.items)
        props.setData(filtered)
    },
    { deep: true, immediate: true }
)

</script>

<template>
    <section class="projects-filter" v-if="showFilters && filterOptions.length > 0">
        <div class="filters-container">
            <div v-for="filterItem in filterOptions" :key="filterItem.key" class="filter-group">
                <label>{{ filterItem.label }}:</label>
                <Dropdown
                    v-model="selectedFilters[filterItem.key as keyof ListFilter]"
                    :options="filterItem.options"
                    optionLabel="label"
                    optionValue="value"
                    :placeholder="filterItem.label"
                    class="filter-select"
                    showClear
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects-filter {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.filters-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;
}

@media (min-width: 640px) {
    .filters-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .filters-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-group label {
    font-weight: 500;
    font-size: 0.875rem;
}

.filter-select {
    width: 100%;
}

:deep(.p-dropdown) {
    width: 100%;
}

:deep(.p-inputtext) {
    width: 100%;
}
</style>