

export const getTableData = (table: Record<string, any>) => {
    return (
        Object.entries(table).map(
            ([_key, value]) => (value)
        )
    ) || []
}

export default getTableData