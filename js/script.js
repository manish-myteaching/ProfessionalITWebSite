// script.js

// Data for topic content paths
// Now supports nested sub-topics with a clear path structure
const topicContentPaths = {
  html: {
    "Introduction": "content/html/introduction.html",
    "Forms": "content/html/forms.html",
    "Tables": "content/html/tables.html"
  },
  css: {
    "Selectors": "content/css/selectors.html",
    "Box Model": "content/css/box-model.html",
    "Flexbox": "content/css/flexbox.html",
    "Grid": "content/css/grid.html"
  },
  js: {
    "Variables": "content/js/variables.html",
    "Functions": "content/js/functions.html",
    "DOM": "content/js/dom.html",
    "Asynchronous JS": "content/js/asynchronous-js.html"
  },

  "core java": {
    "OOP": {
      "Introduction": "content/corejava/oop/introduction.html",
      "Encapsulation": "content/corejava/oop/encapsulation.html",
      "Inheritance": "content/corejava/oop/inheritance.html",
      "Polymorphism": "content/corejava/oop/polymorphism.html",
      "Abstraction": "content/corejava/oop/abstraction.html"
    },
    "Collections": {
      "Overview": "content/corejava/collections/overview.html",
      "List Interface": "content/corejava/collections/list-interface.html",
      "Set Interface": "content/corejava/collections/set-interface.html",
      "Map Interface": "content/corejava/collections/map-interface.html",
      "Queue Interface": "content/corejava/collections/queue-interface.html"
    },
    "Multithreading": {
      "Thread Lifecycle": "content/corejava/multithreading/thread-lifecycle.html",
      "Runnable Interface": "content/corejava/multithreading/runnable-interface.html",
      "Thread Class": "content/corejava/multithreading/thread-class.html",
      "Synchronization": "content/corejava/multithreading/synchronization.html",
      "Executor Framework": "content/corejava/multithreading/executor-framework.html"
    },
    "Exception Handling": {
      "Try-Catch": "content/corejava/exception-handling/try-catch.html",
      "Throw vs Throws": "content/corejava/exception-handling/throw-vs-throws.html",
      "Custom Exceptions": "content/corejava/exception-handling/custom-exceptions.html",
      "Finally Block": "content/corejava/exception-handling/finally-block.html",
      "Checked vs Unchecked": "content/corejava/exception-handling/checked-vs-unchecked.html"
    }
  },

  springboot: {
    // Spring Boot Overview now has subtopics
    "Spring Boot Overview": {
      "Introduction": "content/springboot/overview/introduction.html",
      "Setup": "content/springboot/overview/setup.html",
      "Project Structure": "content/springboot/overview/project-structure.html"
    },
    // Spring Core Concepts now has subtopics
    "Spring Core Concepts": {
      "Dependency Injection": "content/springboot/core-concepts/dependency-injection.html",
      "IoC Container": "content/springboot/core-concepts/ioc-container.html",
      "Beans": "content/springboot/core-concepts/beans.html"
    },

    "Externalized Configuration": {
      "Overview": "content/springboot/externalized-config/overview.html",
      "Application Properties": "content/springboot/externalized-config/application-properties.html",
      "YAML Configuration": "content/springboot/externalized-config/yaml-configuration.html",
      "Environment Variables": "content/springboot/externalized-config/environment-variables.html"
    },
    "Spring Boot Actuator": {
      "Overview": "content/springboot/actuator/overview.html",
      "Health Endpoint": "content/springboot/actuator/health-endpoint.html",
      "Info Endpoint": "content/springboot/actuator/info-endpoint.html",
      "Metrics Endpoint": "content/springboot/actuator/metrics-endpoint.html"
    },
    "RESTful Web Services": {
      "Overview": "content/springboot/restful-web-services/overview.html",
      "Controllers": "content/springboot/restful-web-services/controllers.html",
      "Request Mapping": "content/springboot/restful-web-services/request-mapping.html",
      "Data Handling": "content/springboot/restful-web-services/data-handling.html"
    },
    "Data Access with JPA": {
      "Introduction to JPA": "content/springboot/data-jpa/introduction.html",
      "Repositories": "content/springboot/data-jpa/repositories.html",
      "Custom Queries": "content/springboot/data-jpa/custom-queries.html"
    }
  },
  devops: {
    "Git Basics": {
      "Overview": "content/devops/git/overview.html",
      "Basic Commands": "content/devops/git/basic-commands.html",
      "Branching and Merging": "content/devops/git/branching-merging.html"
    },
    "Jenkins CI/CD": "content/devops/jenkins-cicd.html",
    "Docker Fundamentals": "content/devops/docker-fundamentals.html",
    "Kubernetes Orchestration": {
      "Overview": "content/devops/kubernetes/overview.html",
      "Pods and Deployments": "content/devops/kubernetes/pods-deployments.html",
      "Services and Ingress": "content/devops/kubernetes/services-ingress.html",
      "ConfigMaps and Secrets": "content/devops/kubernetes/configmaps-secrets.html"
    }
  },
  python: {
    "Python Basics": "content/python/python-basics.html",
    "Data Structures": "content/python/data-structures.html",
    "Functions and Modules": {
      "Defining Functions": "content/python/functions-modules/defining-functions.html",
      "Arguments and Return": "content/python/functions-modules/arguments-return.html",
      "Modules and Packages": "content/python/functions-modules/modules-packages.html"
    },
    "Object-Oriented Python": {
      "Classes and Objects": "content/python/oop/classes-objects.html",
      "Inheritance": "content/python/oop/inheritance.html",
      "Polymorphism": "content/python/oop/polymorphism.html"
    }
  },
  cloud: {
    "Cloud Concepts": "content/cloud/cloud-concepts.html",
    "IaaS vs PaaS vs SaaS": "content/cloud/iaas-paas-saas.html",
    "AWS Services": {
      "Overview": "content/cloud/aws/overview.html",
      "EC2": "content/cloud/aws/ec2.html",
      "S3": "content/cloud/aws/s3.html",
      "Lambda": "content/cloud/aws/lambda.html"
    },
    "Azure Services": {
      "Overview": "content/cloud/azure/overview.html",
      "Virtual Machines": "content/cloud/azure/virtual-machines.html",
      "App Service": "content/cloud/azure/app-service.html"
    }
  },
  database: {
    "Database Fundamentals": "content/database/fundamentals.html",
    "SQL Basics": {
      "SELECT Statement": "content/database/sql/select.html",
      "INSERT, UPDATE, DELETE": "content/database/sql/crud.html",
      "JOINs": "content/database/sql/joins.html"
    },
    "NoSQL Databases": {
      "Overview": "content/database/nosql/overview.html",
      "Document Databases": "content/database/nosql/document.html",
      "Key-Value Stores": "content/database/nosql/key-value.html"
    }
  }
};

// Data for subjects and their topics (now includes nested sub-topics)
const subjects = {
  html: {
    title: "HTML Topics",
    topics: [
      { name: "Introduction" },
      { name: "Forms" },
      { name: "Tables" }
    ]
  },
  css: {
    title: "CSS Topics",
    topics: [
      { name: "Selectors" },
      { name: "Box Model" },
      { name: "Flexbox" },
      { name: "Grid" }
    ]
  },
  js: {
    title: "JavaScript Topics",
    topics: [
      { name: "Variables" },
      { name: "Functions" },
      { name: "DOM" },
      { name: "Asynchronous JS" }
    ]
  },
  corejava: {
    title: "Core Java Topics",
    topics: [
      { name: "OOP" ,subtopics: [
          "Introduction",
          "Setup",
          "Project Structure"
      ]},
      { name: "Collections",subtopics: [
          "Introduction",
          "Setup",
          "Project Structure"
      ] },
      { name: "Multithreading",subtopics: [
          "Introduction",
          "Setup",
          "Project Structure"
      ] },
      { name: "Exception Handling",subtopics: [
          "Introduction",
          "Setup",
          "Project Structure"
      ] }
    ]
  },
  springboot: {
    title: "Spring Boot Topics", // Retained title for general subject header
    topics: [
      { // Spring Boot Overview now has subtopics
        name: "Spring Boot Overview",
        subtopics: [
          "Introduction",
          "Setup",
          "Project Structure"
        ]
      },
      { // Spring Core Concepts now has subtopics
        name: "Spring Core Concepts",
        subtopics: [
          "Dependency Injection",
          "IoC Container",
          "Beans"
        ]
      },
      {
        name: "Externalized Configuration",
        subtopics: [
          "Overview",
          "Application Properties",
          "YAML Configuration",
          "Environment Variables"
        ]
      },
      {
        name: "Spring Boot Actuator",
        subtopics: [
          "Overview",
          "Health Endpoint",
          "Info Endpoint",
          "Metrics Endpoint"
        ]
      },
      {
        name: "RESTful Web Services",
        subtopics: [
          "Overview",
          "Controllers",
          "Request Mapping",
          "Data Handling"
        ]
      },
      {
        name: "Data Access with JPA",
        subtopics: [
          "Introduction to JPA",
          "Repositories",
          "Custom Queries"
        ]
      }
    ]
  },
  devops: {
    title: "DevOps Topics",
    topics: [
      {
        name: "Git Basics",
        subtopics: [
          "Overview",
          "Basic Commands",
          "Branching and Merging"
        ]
      },
      { name: "Jenkins CI/CD" },
      { name: "Docker Fundamentals" },
      {
        name: "Kubernetes Orchestration",
        subtopics: [
          "Overview",
          "Pods and Deployments",
          "Services and Ingress",
          "ConfigMaps and Secrets"
        ]
      }
    ]
  },
  python: {
    title: "Python Topics",
    topics: [
      { name: "Python Basics" },
      { name: "Data Structures" },
      {
        name: "Functions and Modules",
        subtopics: [
          "Defining Functions",
          "Arguments and Return",
          "Modules and Packages"
        ]
      },
      {
        name: "Object-Oriented Python",
        subtopics: [
          "Classes and Objects",
          "Inheritance",
          "Polymorphism"
        ]
      }
    ]
  },
  cloud: {
    title: "Cloud Computing Topics",
    topics: [
      { name: "Cloud Concepts" },
      { name: "IaaS vs PaaS vs SaaS" },
      {
        name: "AWS Services",
        subtopics: [
          "Overview",
          "EC2",
          "S3",
          "Lambda"
        ]
      },
      {
        name: "Azure Services",
        subtopics: [
          "Overview",
          "Virtual Machines",
          "App Service"
        ]
      }
    ]
  },
  database: {
    title: "Database Management Topics",
    topics: [
      { name: "Database Fundamentals" },
      {
        name: "SQL Basics",
        subtopics: [
          "SELECT Statement",
          "INSERT, UPDATE, DELETE",
          "JOINs"
        ]
      },
      {
        name: "NoSQL Databases",
        subtopics: [
          "Overview",
          "Document Databases",
          "Key-Value Stores"
        ]
      }
    ]
  }
};

// Function to show general content (Home, Training, Contact)
function showContent(page) {
  document.getElementById('sidebar').style.display = 'none'; // Hide sidebar
  const contentMap = {
    home: `<h1>Home</h1><p>Welcome to the ProfessionalIT tutorial platform. Explore various subjects and topics to enhance your skills.</p>`,
    training: `<h1>Training</h1><p>Our training modules cover a wide range of technologies, from foundational concepts to advanced enterprise solutions. Contact us for custom training programs.</p>`,
    contact: `<h1>Contact</h1><p>Reach out to us at <a href="mailto:contact@professionalit.com">contact@professionalit.com</a> for inquiries or support.</p>`
  };
  document.getElementById('main-content').innerHTML = contentMap[page] || '<h1>Page Not Found</h1><p>The requested content could not be loaded.</p>';
}

// Function to show subject-specific content and populate sidebar
function showSubject(subject) {
  const sidebar = document.getElementById('sidebar');
  const sidebarContent = document.getElementById('sidebar-content');
  const sidebarTitle = document.getElementById('sidebar-title');
  const mainContent = document.getElementById('main-content');

  sidebar.style.display = 'block'; // Show sidebar

  const selected = subjects[subject];

  if (selected) {
    // Use the subject's title property or generate one
    sidebarTitle.textContent = selected.title || subject.charAt(0).toUpperCase() + subject.slice(1) + " Topics";

    let sidebarHtml = '';

    selected.topics.forEach(topic => {
      const topicName = topic.name;
      const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;

      if (hasSubtopics) {
        sidebarHtml += `
          <div class="topic-group">
            <strong class="topic-group-title expandable" onclick="toggleSubtopics(this)">
              ${topicName} <span class="dropdown-arrow">&#9660;</span>
            </strong>
            <div class="subtopics" style="display: none;"> <!-- Hidden by default -->
        `;
        topic.subtopics.forEach(subtopic => {
          sidebarHtml += `<a class="subtopic-link" onclick="loadTopicContent('${subject}', '${encodeURIComponent(topicName)}', '${encodeURIComponent(subtopic)}')">${subtopic}</a>`;
        });
        sidebarHtml += `
            </div>
          </div>
        `;
      } else {
        // Simple topic, directly clickable
        sidebarHtml += `<a onclick="loadTopicContent('${subject}', '${encodeURIComponent(topicName)}', '')">${topicName}</a>`;
      }
    });

    sidebarContent.innerHTML = sidebarHtml;

    // Automatically load the first topic's content
    if (selected.topics.length > 0) {
      const firstTopic = selected.topics[0];
      const firstTopicName = typeof firstTopic === 'string' ? firstTopic : firstTopic.name;

      // If the first topic has subtopics, load its 'Overview' if available, otherwise just the main topic
      if (firstTopic.subtopics && firstTopic.subtopics.length > 0 && topicContentPaths[subject]?.[firstTopicName]?.["Overview"]) {
        loadTopicContent(subject, encodeURIComponent(firstTopicName), encodeURIComponent("Overview"));
      } else {
        loadTopicContent(subject, encodeURIComponent(firstTopicName), '');
      }
    } else {
      mainContent.innerHTML = `
        <h1>${selected.title || subject.charAt(0).toUpperCase() + subject.slice(1) + " Topics"}</h1>
        <p>No topics available for this subject.</p>
      `;
    }
  } else {
    sidebarTitle.textContent = "Error";
    sidebarContent.innerHTML = `<p><em>Subject not found.</em></p>`;
    mainContent.innerHTML = `<h1>Error</h1><p>The selected subject could not be found.</p>`;
  }
}

// New function to toggle subtopic visibility
function toggleSubtopics(element) {
  const subtopicsDiv = element.nextElementSibling; // Get the next sibling, which should be the .subtopics div
  const arrowSpan = element.querySelector('.dropdown-arrow');

  if (subtopicsDiv) {
    if (subtopicsDiv.style.display === 'none') {
      subtopicsDiv.style.display = 'block';
      arrowSpan.innerHTML = '&#9650;'; // Up arrow
    } else {
      subtopicsDiv.style.display = 'none';
      arrowSpan.innerHTML = '&#9660;'; // Down arrow
    }
  }
}


// Function to load specific topic content into the main area dynamically
// Now accepts mainTopic and optional subTopic
async function loadTopicContent(subject, encodedMainTopic, encodedSubTopic) {
  const mainTopic = decodeURIComponent(encodedMainTopic);
  const subTopic = decodeURIComponent(encodedSubTopic); // Will be empty string if no sub-topic

  let contentPath;
  let displayTopicName;

  if (subTopic) {
    // It's a sub-topic, so we need to drill down into the topicContentPaths object
    contentPath = topicContentPaths[subject]?.[mainTopic]?.[subTopic];
    displayTopicName = `${mainTopic}: ${subTopic}`;
  } else {
    // It's a main topic (either one without sub-topics, or the overview of a group)
    contentPath = topicContentPaths[subject]?.[mainTopic];
    displayTopicName = mainTopic;
  }

  const mainContentDiv = document.getElementById('main-content');

  if (contentPath) {
    mainContentDiv.innerHTML = `<h2>Loading ${displayTopicName}...</h2><p>Please wait.</p>`; // Show loading message
    try {
      const response = await fetch(contentPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const content = await response.text();
      mainContentDiv.innerHTML = content;
    } catch (error) {
      console.error("Error loading topic content:", error);
      mainContentDiv.innerHTML = `
        <h2>Error loading ${displayTopicName}</h2>
        <p>Could not load content for this topic. Please try again later.</p>
        <p>Details: ${error.message}</p>
      `;
    }
  } else {
    mainContentDiv.innerHTML = `
      <h2>${displayTopicName}</h2><p>Content for this topic is coming soon or path is incorrect.</p>
    `;
  }
}

// Initialize the page with home content when loaded
document.addEventListener('DOMContentLoaded', () => {
  showContent('home');
});
