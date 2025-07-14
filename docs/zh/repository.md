数据仓库 (Repository) 是 `EaseAdmin` 中对数据增删改查操作接口的具体实现，通过 `Repository` 的介入可以让页面的构建不再关心数据读写功能的具体实现，开发者通过实现 Repository 接口即可对数据进行读写操作。

数据表格的 index update store destroy 方法分别对数据仓库的 paginate、export、update、store、destroy 方法进行调用。下面是 Repository 接口的定义。

```typescript
export default abstract class Repository {
    protected primaryKey: string = 'id'
    protected abstract model: LucidModel
    protected filters: Record<string, QueryType> = {
        id: QueryType.eq,
        orderBy: QueryType.orderBy,
    }

    // 获取模型
    getModel()

    // 获取参数
    protected only(qs: Record<string, any>, keys: string[])

    //排除参数
    protected except(qs: Record<string, any>, keys: string[])

    // 获取关联参数
    protected relations(items: Record<string, any>[] | string, key: string = 'id')

    // 查询构建方法
    protected queryBuilder(query: ModelQueryBuilderContract<LucidModel, LucidRow>,inputs: Record<string, string>,filters: Record<string, QueryType> = {})

    // 分页表格接口
    async paginate(qs: Record<string, any>, filters: Record<string, QueryType> = {})

    // 导出数据接口
    async export(qs: Record<string, any>, filters: Record<string, QueryType> = {})

    // 详情接口
    async detail(id: number | string)

    // 新增接口
    async create(data: Record<string, any>)
    
    // 更新接口
    async update(ids: number[] | string[], data: Record<string, any>)

    // 删除接口
    async delete(ids: number[] | string[])

    // 强制删除接口
    async forceDelete(ids: string[] | number[])

    // 恢复接口
    async restore(ids: string[] | number[])
}
```