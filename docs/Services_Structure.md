🚀 Service Project Architecture

```plaintext
Service
├── API
│   ├── Controllers             # API controllers handling HTTP requests
│   └── Extensions              # Extension methods for configuration (e.g. Mapster)
│
├── Application
│   ├── Dtos                   # Data Transfer Objects
│   ├── Interfaces
│   │   ├── Queries            # Query interfaces
│   │   ├── Repositories       # Repository interfaces
│   │   └── IUnitOfWork.cs     # Unit of Work interface
│   ├── Modules
│   │   ├── Commands           # CQRS commands (write operations)
│   │   ├── Queries            # CQRS queries (read operations)
│   │   └── EventHandler
│   │       ├── Domain         # Domain event handlers
│   │       └── Integration    # Integration event handlers
│   ├── Validators             # FluentValidation classes for DTOs
│   └── DependencyInjection.cs # Registers Application services into DI container
│
├── Domain
│   ├── Data
│   │   └── I<Entity>DbContext.cs # Shared DbContext interface
│   ├── Modules
│   │   ├── Entities           # Domain entities
│   │   └── Events
│   │       └── DomainEvents   # Domain event definitions
│   └── ValueObject            # Immutable value objects
│
├── Infrastructure
│   ├── Configurations         # EF Core configurations
│   ├── Migrations             # EF Core migration files
│   ├── Queries                # Query interface implementations
│   ├── Repositories           # Repository interface implementations
│   ├── DependencyInjection.cs # Registers Infrastructure services, DbContext
│   └── DbContext.cs           # Concrete DbContext implementation
│
└── Integration
    ├── Events
    │   └── IntegrationEvents  # Integration event definitions
    ├── EventBus
    │   ├── IEventBus.cs       # Event bus interface
    │   └── Implementations    # Event bus implementations (e.g. RabbitMQ)
    └── DependencyInjection.cs # Registers Integration services and event bus
```

## 🏗 Dependency Rule

[Presentation/API] → [Application] → [Domain]  
         ↓  
   [Infrastructure] ──→ [Application]  
         ↓  
      [Domain]  
