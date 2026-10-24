# NinjaScript Gen Webform

A browser form for building a NinjaTrader strategy. Submit sends the form to a PHP script, which runs [NinjaScriptGenerator](https://github.com/d3fault1/NinjaScriptGenerator) and returns the generated file.

---

## Overview

- Steps for the strategy name, instrument, defaults, stops, targets, and entry and exit rules.
- Posts the form to `php/handle-json.php`.
- Runs `NinjaScriptGenerator.exe` from an `api` folder.

---

## Tech Stack

| Component | Technology |
| --- | --- |
| **Page** | HTML, JavaScript |
| **Server** | PHP |

---

## Project Structure

```
NinjaScriptGenWebform/
├── index.html
├── js/
├── css/
└── php/
    └── handle-json.php
```

---

## Prerequisites

- PHP on Windows, with permission to run programs
- A built `NinjaScriptGenerator.exe` and `Newtonsoft.Json.dll`

---

## Setup

Create an `api` folder next to `index.html`. Put `NinjaScriptGenerator.exe` and `Newtonsoft.Json.dll` in it.

Create `api\Temp\Strategies`.

---

## Run

Serve this folder with PHP and open `index.html`. Fill in the form and submit.
