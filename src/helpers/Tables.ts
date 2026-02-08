

export const getTableData = (table: Record<string, any>) => {
    return (Object.entries(table).map(([key, value]) => ({
            id: key,
            ...value,
        })
    )) || []
}

export default getTableData