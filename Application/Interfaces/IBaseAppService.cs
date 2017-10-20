using System;
using System.Linq;
using System.Linq.Expressions;
using Application.ViewModels.Common;

namespace Application.Interfaces
{
    public interface IBaseAppService<T, TViewModel>
        where T : class
        where TViewModel : class
    {
        TViewModel Add(T model);
        IQueryable<T> Find(Expression<Func<T, bool>> predicate, params string[] includeProperties);
        IQueryable<T> GetAll(params string[] includeProperties);
        PagingViewModel<TViewModel> GetByAllPage(PagingViewModel<TViewModel> page, params string[] includeProperties);
        TViewModel GetById(int id);
        void Remove(T model);
        TViewModel Update(T model);
        void Dispose();
    }
}