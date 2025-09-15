# Uninstalling

If you ever want to remove **Glassify Theme** from Spotify, follow the
instructions below. You can uninstall it either through the Marketplace or using
the CLI.

## 🗑 Uninstall via Marketplace

1. Open Spotify and go to the **Marketplace** section.
2. Navigate to the **Installed** tab.
3. Find **Glassify Theme** in the list.
4. Click the **Delete** button to remove the extension.

That's it! Glassify Theme will be removed automatically.

## 🖥 Uninstall via CLI

1. Disable the extension by running the following command:

```bash
spicetify config current_theme ''
```

or (if you prefer marketplace)

```bash
spicetify config current_theme marketplace
```

2. Apply the changes to update Spotify:

```bash
spicetify apply
```

3. Delete the extension file from your Spicetify configuration directory:

```bash
rm ~/.config/spicetify/Themes/Glassify
```

_(Use `spicetify config-dir` to quickly find your Spicetify configuration
folder.)_

> Use `spicetify config-dir` to locate your configuration folder quickly if
> needed.

Glassify Theme is now completely removed from your Spotify setup. 🎵✅
