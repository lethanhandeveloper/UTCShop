---

## 🚀 Project Layers

### API Project
- **Controllers**: Contains API controllers handling HTTP requests.
- **Extensions**: Contains extension methods for configuration (e.g. AutoMapper).

### Application Project
- **Dtos**: Data Transfer Objects for communication between controllers and business logic.
- **Interfaces**
  - **Queries**: Interfaces for data queries.
  - **Repositories**: Interfaces for repositories.
  - **IUnitOfWork**: Manages repository interfaces for transactions.
- **Modules**
  - **Commands**: CQRS commands for data modifications.
  - **Queries**: CQRS queries for retrieving data.
- **Validators**: FluentValidation classes for DTO validation.
- **DependencyInjection.cs**: Registers Application services to the DI container.

### Domain Project
- **Data**
  - `I<Entity>DbContext.cs`: Shared DbContext interface.
- **Modules**
  - **Entities**: Domain entities.
- **ValueObject**: Immutable value objects representing domain concepts.

### Infrastructure Project
- **Configurations**: EF Core entity configurations.
- **Migrations**: Generated database migration files.
- **Queries**: Implements application query interfaces.
- **Repositories**: Implements application repository interfaces.
- **DependencyInjection.cs**: Registers database, DbContext, queries, repositories, Unit of Work.
- **DbContext.cs**: Implements the domain DbContext interface, declares DbSets.

---

## 💡 Key Features

- Clean separation of concerns between API, Application, Domain, and Infrastructure.
- CQRS pattern with Commands and Queries for clear read/write separation.
- Easy testing and mocking through interfaces.
- FluentValidation for input validation.
- Entity Framework Core integration.
