# Getting Started

Welcome to **Glassify Theme** – a sleek and modern theme for **Spotify**,
designed for use with **Spicetify**. With Glassify Theme, you can enjoy:

- A clean, glass-inspired aesthetic
- Easy customization to match your style

Follow this guide to quickly install and configure Glassify via the
**Marketplace** or from **source**.

## ✅ Prerequisites

Before proceeding, make sure you have the following installed:

- 🎧 **Spotify** (Desktop version)
  - [Spotify Installation Guide](https://www.spotify.com/de-en/download/)

- ⚙ **Spicetify CLI** – A powerful tool for personalizing Spotify’s interface
  and functionality
  - [Spicetify Installation Guide](https://spicetify.app/docs/getting-started)

- 📦 **Deno** (Optional) – Required only if you plan to build Glassify from
  source
  - [Deno Installation Guide](https://docs.deno.com/runtime/getting_started)

## 🚀 Installation Guide

You can install **Glassify ** either through the Marketplace or by building it
from source. Choose the method that suits you best.

### **Install via Marketplace**

1. Follow the
   [Marketplace installation guide](https://github.com/spicetify/marketplace/wiki/Installation)
   if you haven’t set it up yet.
2. Open Spotify and go to the **Marketplace** section.
3. Navigate to the **Themes** tab.
4. Search for **Glassify** and click **Install**.

That’s it! The theme will be enabled automatically.

### **Install from Source**

#### 1. Download Theme

Clone or download Glassify Theme repository:

```bash
git clone https://github.com/sanoojes/Spicetify-Glassify.git
```

#### 2. Build Theme

You can build the theme using `build` task. Theme will be saved to `/src` folder

```bash
deno run build
```

#### 3. Move Theme

Copy the src folder into Spicetify’s Themes directory:

```bash
cp -r src/ ~/.config/spicetify/Themes/Glassify
```

_(Use `spicetify config-dir` to quickly find your Spicetify configuration
folder.)_

#### 4. Enable Theme

You can enable the theme using these methods.

##### **Using the Command Line**

Run the following to activate the theme:

```bash
spicetify config current_theme Glassify
```

##### **Manually Editing the Configuration**

Open the configuration file located at:

```bash
~/.config/spicetify/config-xpui.ini
```

Under the `[Settings]` section, add or update this line:

```ini
[Settings]
current_theme = Glassify
```

#### 4. Apply the Changes

To finalize the installation and see the effects, run:

```bash
spicetify apply
```

Now you can enjoy synced lyrics while listening to your favorite tracks!

Here’s the updated **How to Use** section with clearer instructions and improved
formatting:

Happy listening and enjoy the theme! 🎧📜
