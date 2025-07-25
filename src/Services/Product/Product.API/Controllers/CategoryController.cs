﻿using BuildingBlocks.Attribute;
using BuildingBlocks.Controllers;
using BuildingBlocks.Pagination;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Dtos;
using Product.Application.Modules.Category.Commands.Create;
using Product.Application.Modules.Category.Commands.Delete;
using Product.Application.Modules.Category.Commands.Update;
using Product.Application.Modules.Category.Queries.GetCategories;
using Product.Application.Modules.Category.Queries.GetLeafCategories;

namespace Product.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
public class CategoryController : BaseController
{
    [HttpPost("Get")]
    public async Task<PaginatedResult<CategoryDto>> Get([FromBody] PaginationRequest request)
    {
        var query = new GetCategoriesQuery(request);
        var results = await Dispatcher.Send(query);
        return results;
    }

    [HttpPost("Create")]
    public async Task<Guid> Create([FromBody] CategoryDto request)
    {
        var command = new CreateCategoryCommand(request);
        var results = await Dispatcher.Send(command);
        return results.Id;
    }


    [HttpDelete("Delete")]
    public async Task<List<Guid>> Delete(List<Guid> Ids)
    {
        var command = new DeleteCategoryCommand(Ids);
        var results = await Dispatcher.Send(command);
        return results.Ids;
    }

    [HttpPut("Update")]
    public async Task<Guid> Update(CategoryDto category)
    {
        var command = new UpdateCategoryCommand(category);
        var results = await Dispatcher.Send(command);
        return results.Id;
    }

    [HttpGet("GetAllCategories")]
    public async Task<List<CategoryDto>> GetAllCategories()
    {
        return await Dispatcher.Send(new GetAllCategoriesQuery());
    }

    [HttpGet("GetLeafCategories")]
    public async Task<List<CategoryDto>> GetLeafCategories()
    {
        return await Dispatcher.Send(new GetLeafCategories());
    }
}
