using Application.AutoMapper;
using Application.Interfaces;
using Application.ViewModels.Common;
using CrossCutting.Extensions;
using Domain.Interfaces;
using Domain.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Application.Services
{
    public partial class BaseAppService<T, TViewModel> : IBaseAppService<T, TViewModel>
        where T : class
        where TViewModel : class
    {
        protected IBaseService<T> _service;
        protected IUnitOfWork _uow;

        public BaseAppService(IBaseService<T> service, IUnitOfWork uow)
        {
            _uow = uow;
            _service = service;
        }

        public IQueryable<T> Find(Expression<Func<T, bool>> predicate, params string[] includeProperties)
        {
            var model = _service.Find(predicate, includeProperties);
            return model;
        }

        public TViewModel GetById(int id)
        {
            var model = _service.GetById(id);
            return model.MapTo<TViewModel>();
        }

        public IQueryable<T> GetAll(params string[] includeProperties)
        {
            var model = _service.GetAll(includeProperties);
            return model;
        }

        public PagingViewModel<TViewModel> GetByAllPage(PagingViewModel<TViewModel> page, params string[] includeProperties)
        {
            try
            {
                var model = _service.GetAll(includeProperties).Paging(page.Number, page.Size, page.OrderBy, page.OrderDirection);

                page.List = model.Item1.MapTo<List<TViewModel>>();
                page.TotalCount = model.Item2;
                return page;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public TViewModel Add(T model)
        {
            var result = _service.Add(model);
            _uow.Commit();
            return result.MapTo<TViewModel>();
        }

        public TViewModel Update(T model)
        {
            var result = _service.Update(model);
            _uow.Commit();
            return result.MapTo<TViewModel>();
        }

        public void Remove(T model)
        {
            _service.Remove(model);
            _uow.Commit();
        }
    }

}
