The Repository is the concrete implementation of the data CRUD operation interface in `EaseAdmin`. Through the intervention of `Repository`, page construction no longer needs to care about the specific implementation of data reading and writing functions. Developers can read and write data by implementing the Repository interface.

The index, update, store, and destroy methods of the data table call the paginate, export, update, store, and destroy methods of the data repository respectively. The following is the definition of the Repository interface.

```typescript
export default abstract class Repository {
    protected primaryKey: string = 'id'
    protected abstract model: LucidModel
    protected filters: Record<string, QueryType> = {
        id: QueryType.eq,
        orderBy: QueryType.orderBy,
    }

    // Get model
    getModel()

    // Get parameters
    protected only(qs: Record<string, any>, keys: string[])

    // Exclude parameters
    protected except(qs: Record<string, any>, keys: string[])

    // Get related parameters
    protected relations(items: Record<string, any>[] | string, key: string = 'id')

    // Query builder method
    protected queryBuilder(query: ModelQueryBuilderContract<LucidModel, LucidRow>,inputs: Record<string, string>,filters: Record<string, QueryType> = {})

    // Pagination table interface
    async paginate(qs: Record<string, any>, filters: Record<string, QueryType> = {})

    // Export data interface
    async export(qs: Record<string, any>, filters: Record<string, QueryType> = {})

    // Detail interface
    async detail(id: number | string)

    // Create interface
    async create(data: Record<string, any>)
    
    // Update interface
    async update(ids: number[] | string[], data: Record<string, any>)

    // Delete interface
    async delete(ids: number[] | string[])

    // Force delete interface
    async forceDelete(ids: string[] | number[])

    // Restore interface
    async restore(ids: string[] | number[])
}
```