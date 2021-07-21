# Java and Spring
- apps are managed and run by Java Application Servers
- They can access Resources provided by the server
- There may be many other apps on the same server

## Lesson 1: Final Review
If you're having trouble completing this, refer back to the screencasts for Spring Starter Packs and make sure you re-read the instructions carefully. When you generate the project, check the POM file and make sure that it has the correct dependencies and metadata listed in the instructions. You can compare your solution against mine here.

## Glossary
- HTTP Request/Response: HTTP, or HyperTextTransferProtocol, is a binary data format for communication between programs over the web. It can be broken down into two basic message types: requests and responses. Clients send requests for resources to servers, which respond with the requested data. Read more about the protocol here.
- HTTP GET and POST: Every HTTP request has an important header that determines its method. GET and POST are two of the most common; GET indicates a request for data from the server, and POST represents a request to "post" new data to the server - this usually represents some action on server data like submitting search terms, posting an update, or adding new data to the server.
- HTTP: Hypertext Transfer Protocol. A binary protocol that originally defined the mechanics of requesting and sending HTML over the internet.
- Web Server: A program that listens for and responds to HTTP requests over the internet
- Application Server: A program that hosts other applications, forwarding incoming requests to the appropriate application according to a filter. Provides shared access to resources and multi-threading.
- Pluggable Architecture: A pluggable architecture refers to any piece of software that allows parts of it to be added, replaced, and removed. Usually, this is achieved through a common interface for every "pluggable" component. Sometimes the architecture can even replace components at runtime, as is the case with Servlets in an Application Server.
- Threads/Threading: These terms come from concurrent programming - a thread is essentially one track of computation, and multi-threading is running multiple threads in parallel. This gets a little complicated because your CPU have a limited number of physical cores that can process instructions in parallel, while the number of thread you can have can be many more than your computer has cores, but that's a topic for another time!
- Endpoints: An endpoint is the address at which a client can reach a specific part of a server's functionality. Usually, this is a URL path, the /words/and/slashes that follow the domain of a URL, like .com or .org.
- Servlet: A class defined as a part of the Java: Enterprise Edition specification. Provides an implementable interface for web server request processing, defining a service method that the server invokes on an instantiated servlet to handle a ServletRequest and ServletResponse object for an incoming request. The servlet also defines lifecycle methods for the server to invoke when initializing or destroying a servlet.
- JAR: A Java Archive file, which stores compiled .class files in a folder hierarchy that matches the code's package structure. Includes an optional manifest file.
- WAR: A variation on the JAR for web applications, which optionally includes web resources like HTML files and configuration files like web.xml for servlet registration/mapping.
- IoC: Inversion of Control, which is the practice of designing libraries as application runners. This allows developers to focus on application-specific logic and rely on IoC containers to connect application components with one another, eliminating a lot of boilerplate and encouraging a clean separation of development concerns.
- Maven: A dependency management system and project build tool for Java. Provides a standardized way to define dependencies between projects and include them in the project build path.
- POM: The Project Object Model that Maven uses to represent the dependency and build configuration of a project. Usually, this refers to the pom.xml configuration file found in a Maven project.
- Dependency Management System: Any tool that automates the downloading and linking of external packages to a software development project. Most languages these days either provide one officially or have a community-accepted standard.


## Summary - Spring Boot Dependencies
- Spring Web This dependency helps to build RESTful web services using the Spring MVC. It uses Apache Tomcat as the default container.
- Thymeleaf It is a server-side Java template engine for both web and standalone applications that allows you to show HTML web pages to a client and populate them with data directly using the server code.
- Spring Security It is a dependency that allows custom authentication and access-control framework for the web application.
- MyBatis It is a persistence framework for having SQL support. MyBatis couples objects with SQL statements using an XML descriptor or annotations.



## Lession 2
- type of classes: data type simple data containers and components persistent services
- 




