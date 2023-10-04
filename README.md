# Electricity Tariff Comparison Service

This service allows users to compare electricity tariffs and estimate their annual costs based on their consumption. It supports different tariff types and provides a RESTful API to retrieve cost comparisons.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Sample Request](#sample-request)
- [Sample Response](#sample-response)

## Prerequisites

- Node.js (v16.x or higher)
- npm (Node Package Manager)
- TypeScript
- Docker

## Installation

Install the project dependencies: npm install
Run docker : make up
Stop docker : make down
Run test : npx jest

The server should now be running on http://localhost:4000.

## Usage

API Endpoint
Calculate tariffs and get cost comparisons:
GET /compare?consumption=<consumption_kWh_per_year>

Sample Response
The API will return a JSON response with a list of tariffs sorted by annual costs in ascending order:
[
{
"name": "Product A",
"annualCost": 830
},
{
"name": "Product B",
"annualCost": 800
}
]

- you can check the API with SWAGGER with
  http://localhost:4000/api-docs
