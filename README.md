# Backend Studies

<div align="left">

[![Track](https://img.shields.io/badge/Track-Backend-1a1a2e?style=for-the-badge)](./)
[![Levels](https://img.shields.io/badge/Levels-4-1a1a2e?style=for-the-badge)](./)
[![Weekly workload](https://img.shields.io/badge/Workload-5--10h%2Fweek-1a1a2e?style=for-the-badge)](./)
[![Language](https://img.shields.io/badge/Language-English-1a1a2e?style=for-the-badge)](./)

</div>

> **Backend Studies** is a progressive learning path for developing backend skills, from HTTP, APIs, and database fundamentals to distributed systems, event-driven architecture, and high-performance engineering.

---

## Table of Contents

- [About the repository](#about-the-repository)
- [Track levels](#track-levels)
- [How to use](#how-to-use)
- [Practical projects](#practical-projects)
- [Structure](#structure)
- [Contributing](#contributing)
- [License](#license)

---

## About the Repository

The content is organized into four progressive levels. Each material combines:

- Theory and fundamental concepts;
- Guided practice with backend tools and technologies;
- Exercises to consolidate the content;
- Projects to apply the knowledge to real-world scenarios.

The track is designed for an average commitment of **5 to 10 hours per week**. The levels should be studied in order, following the prerequisites for each stage.

## Track Levels

| Level | Material | Estimated duration | Main focus |
|---|---|---:|---|
| **1 — Foundation** | [Open PDF](./level01/level-01-foundation.pdf) | 14 weeks | HTTP/HTTPS, API design, SQL, Clean Code, SOLID, testing, authentication, Docker, and CI/CD |
| **2 — Intermediate** | [Open PDF](./level02/level-02-intermediate.pdf) | 16 weeks | Real-time systems, Redis, MongoDB, caching, Clean Architecture, scalability, and performance |
| **3 — Advanced** | [Open PDF](./level03/level-03-advanced.pdf) | 20 weeks | Microservices, messaging, event-driven architecture, gRPC, observability, and Kubernetes |
| **4 — Mastery** | [Open PDF](./level04/level-04-mastery.pdf) | 24+ weeks | Distributed systems, Kafka, cloud, security, distributed consensus, and extreme performance |

### Level 1 — Foundation

Builds the foundation needed to develop robust and well-structured APIs. Main topics include:

- HTTP request and response lifecycle, HTTPS, TLS, and HTTP/2;
- REST, versioning, pagination, filtering, and RFC 7807;
- Relational modeling, joins, indexes, transactions, and migrations;
- Algorithm complexity, Clean Code, SOLID, and Design Patterns;
- Unit testing, TDD, JWT authentication, and basic security;
- Docker, structured logging, graceful shutdown, and CI/CD pipelines.

### Level 2 — Intermediate

Extends applications to scenarios with higher volume, real-time communication, and multiple data sources. This level covers:

- WebSockets, Server-Sent Events, and real-time communication;
- Redis, cache-aside, TTL, invalidation, pub/sub, and rate limiting;
- MongoDB, document modeling, and aggregation pipelines;
- Nginx, HTTP caching, compression, CORS, and reverse proxies;
- Clean Architecture, integration testing, contract testing, and idempotency;
- Backpressure, circuit breakers, and query optimization.

### Level 3 — Advanced

Introduces the components and patterns used in distributed systems and microservice architectures:

- RabbitMQ, Kafka, exchanges, topics, consumer groups, and DLQs;
- Event-driven architecture, Event Sourcing, and the Saga Pattern;
- Service discovery, API gateways, and synchronous and asynchronous communication;
- gRPC, Protocol Buffers, and GraphQL;
- Metrics with Prometheus, tracing with OpenTelemetry, and structured logging;
- Kubernetes, load testing, connection pooling, and streaming;
- Implementation of a multithreaded HTTP server in C++.

### Level 4 — Mastery

Explores architectural decisions and distributed-systems trade-offs at scale:

- System Design, CAP, PACELC, quorum, and consistency;
- Event Sourcing, CQRS, event stores, and projections;
- Kafka, stream processing, and exactly-once delivery;
- Terraform, AWS/GCP, and infrastructure as code;
- OWASP Top 10, OAuth2/OIDC, mTLS, and secrets management;
- Raft, Paxos, CRDTs, and distributed consensus;
- CPU and memory profiling, flame graphs, and benchmarking.

## How to Use

### Clone the repository

```bash
git clone https://github.com/Hugolelis/Estudos.git
cd Estudos
```

### Follow the track

1. Start with [Level 1 — Foundation](./level01/level-01-foundation.pdf).
2. Study the theory presented each week.
3. Complete the practical activities locally and record your conclusions.
4. Solve the weekly exercise before moving on.
5. Continue to the next level after completing its prerequisites.

The PDF files can be opened directly in a browser or with any compatible document reader.

## Practical Projects

| Level | Suggested projects |
|---|---|
| **1** | Task Manager API |
| **2** | URL Shortener, Real-Time Chat, and E-commerce API |
| **3** | Payment System and HTTP server in C++ |
| **4** | Data Streaming Platform |

The projects provide practical applications of the concepts studied and can be developed in separate repositories as the track progresses.

## Structure

```text
.
├── level01/
│   └── level-01-foundation.pdf
├── level02/
│   └── level-02-intermediate.pdf
├── level03/
│   └── level-03-advanced.pdf
├── level04/
│   └── level-04-mastery.pdf
└── README.md
```

Each PDF contains the weekly plan for its respective level, including estimated duration, prerequisites, topics, practical activities, and exercises.

## Contributing

Suggestions and improvements are welcome. To contribute:

1. Fork the repository.
2. Create a branch for your change (`git checkout -b feature/my-suggestion`).
3. Update the material or propose new exercises and references.
4. Commit your changes (`git commit -m 'Add study suggestion'`).
5. Open a Pull Request.

## License

This repository does not currently contain a license file. Contact the owner before redistributing or using the material outside this project.
