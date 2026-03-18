# Getting Started

Welcome to **Lucid Lyrics** – a sleek and efficient lyrics extension for **Spotify**, powered by **Spicetify**. With Lucid Lyrics, you can enjoy synchronized lyrics with optional romanization support, customizable themes, and precise timing adjustments – all while listening to your favorite tracks.

Follow this guide to quickly install and configure the extension, whether you prefer using the Marketplace or building it from source.

## ✅ Prerequisites

Before proceeding, make sure you have the following installed:

- 🎧 **Spotify** (Desktop version)

* [Spotify Installation Guide](https://www.spotify.com/de-en/download/)

- ⚙ **Spicetify CLI** – A powerful tool for personalizing Spotify’s interface and functionality
  - [Spicetify Installation Guide](https://spicetify.app/docs/getting-started)
- 📦 **Deno** (Optional) – Required only if you plan to build Lucid Lyrics from source
  - [Deno Installation Guide](https://docs.deno.com/runtime/getting_started)

## 🚀 Installation Guide

You can install **Lucid Lyrics** either through the Marketplace or by building it from source. Choose the method that suits you best.

### **Install via Marketplace**

1. Follow the [Marketplace installation guide](https://github.com/spicetify/marketplace/wiki/Installation) if you haven’t set it up yet.
2. Open Spotify and go to the **Marketplace** section.
3. Navigate to the **Extensions** tab.
4. Search for **Lucid Lyrics** and click **Install**.

That’s it! The extension will be enabled automatically.

### **Build from Source**

#### 1. Download the Extension

Clone or download the Lucid Lyrics repository:

```bash
git clone https://github.com/sanoojes/lucid-lyrics.git
```

#### 2. Build the Extension

You can build the extension using `build` task. Extension will be saved to `/dist` folder

```bash
deno run build
```

#### 3. Move the Extension

Copy the extension folder into Spicetify’s extensions directory:

```bash
cp -r dist/lucid-lyrics.js ~/.config/spicetify/Extensions/
```

_(Use `spicetify config-dir` to quickly find your Spicetify configuration folder.)_

#### 4. Enable the Extension

You can enable the extension using these methods.

##### **Using the Command Line**

Run the following to activate the extension:

```bash
spicetify config extensions lucid-lyrics.js
```

##### **Manually Editing the Configuration**

Open the configuration file located at:

```bash
~/.config/spicetify/config-xpui.ini
```

Under the `[AdditionalOptions]` section, add or update this line:

```ini
[AdditionalOptions]
extensions = lucid-lyrics.js
```

#### 4. Apply the Changes

To finalize the installation and see the effects, run:

```bash
spicetify apply
```

Now you can enjoy synced lyrics while listening to your favorite tracks!

Here’s the updated **How to Use** section with clearer instructions and improved formatting:

## 🧭 How to Use

1. Open **Spotify** and play any track.
2. Click on the **lyrics icon** in the playbar or the “Now Playing” sidebar (right panel) to view the lyrics.
3. Open the settings by clicking your **profile picture** in the top bar and selecting **Lucid Lyrics Settings**.
4. Use the settings menu to:
   - Adjust the background theme (animated, static or solid color),
   - Fine-tune the timing offset,
   - Toggle romanized lyrics on or off.
5. Sit back and enjoy as the lyrics highlight lines and words in real time, perfectly synced with the music.

## ✅ Troubleshooting

**❌ Lyrics not showing?**

- Make sure `lucid-lyrics.js` is listed in the enabled extensions.
- Restart Spotify and run `spicetify apply` again.

<!-- ---

## 📖 Learn More

* Check out our [API Reference](/api) for advanced configurations.
* Explore customization options like themes and offsets.

--- -->

Happy listening and enjoy your lyrics perfectly! 🎧📜
