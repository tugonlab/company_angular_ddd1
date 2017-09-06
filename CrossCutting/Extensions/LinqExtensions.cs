using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;

namespace CrossCutting.Extensions
{
    public static class LinqExtensions
    {
        #region LINQ
        public static Tuple<IQueryable<T>, int> Paging<T, TKey>(this IQueryable<T> obj, int? page, int? pageSize = 50, string orderBy = null, string orderDirection = "ASC")
        {
            return Paging(obj, page, pageSize, orderBy, orderDirection);
        }

        public static Tuple<IQueryable<T>, int> Paging<T>(this IEnumerable<T> obj, int? page, int? pageSize = 50, string orderBy = null, string orderDirection = "ASC")
        {
            if (page != null && page.Value <= 0)
                page = 1;
            int size = (int)pageSize.Value;
            try
            {
                if (page == 1)
                    if (orderBy != null)
                        return new Tuple<IQueryable<T>, int>(obj.OrderBy(string.Format("{0} {1}", orderBy, orderDirection)).Take(size).AsQueryable(), obj.Count());
                    else
                        return new Tuple<IQueryable<T>, int>(obj.Take(size).AsQueryable(), obj.Count());
                else
                {
                    if (orderBy != null)
                        return new Tuple<IQueryable<T>, int>(obj.OrderBy(string.Format("{0} {1}", orderBy, orderDirection)).Skip(((int)page - 1) * size).Take(size).AsQueryable(), obj.Count());
                    else
                        return new Tuple<IQueryable<T>, int>(obj.Take(size).AsQueryable().Skip(((int)page - 1) * size), obj.Count());
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        #endregion
    }
}
