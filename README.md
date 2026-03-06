# Network Visualization Frontend Project

## Project Overview
<video src="assets/graph_visualization.mp4" controls width="700"></video>

This repository contains the **frontend part of the final project** developed for the **Complex Dynamic Networks** course.

The **backend project**, **Colab notebook**, and **full project report** can be found in the following repository:

🔗 https://github.com/AylinNaebzadeh/Network-Visualization-Backend-Project/tree/main

This web application provides tools for **network analysis and visualization**. In addition to computing general network statistics, it enables analysis of important nodes and simulation of epidemic spreading models.

### Features

The application calculates and visualizes:

- **General Network Statistics**
  - Diameter
  - Transitivity
  - Number of nodes
  - Number of edges

- **Centrality Measures**
  - Identifies **important nodes** in the network based on different centrality metrics.

- **Clustering Analysis**
  - Computes the **average clustering coefficient** for groups of nodes based on their labels.

- **Epidemic Modeling**
  - Implements two common epidemic models:
    - **SIS (Susceptible–Infected–Susceptible)**
    - **SIR (Susceptible–Infected–Recovered)**

These models allow users to simulate **infection spread dynamics over networks**.

### Application Preview

Below are some screenshots from the application:

![Network Visualization Screenshot 1](assets/general_information_1.png)
![Network Visualization Screenshot 2](assets/general_information_2.png)

![Network Visualization Screenshot 3](assets/label_classification_1.png)
![Network Visualization Screenshot 4](assets/label_classification_2.png)
![Network Visualization Screenshot 5](assets/label_classification_3.png)

![Network Visualization Screenshot 6](assets/important_nodes.png)

![Network Visualization Screenshot 7](assets/epidemic_models_1.png)
![Network Visualization Screenshot 8](assets/epidemic_models_2.png)

---

## Technology Stack

- **ReactJS**

### Important Libraries

- **ApexCharts** – Used for interactive data visualization
- **Material UI** – UI component library
- **Axios** – For API communication with the backend
