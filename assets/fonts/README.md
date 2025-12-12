# Circular Std Font Setup

## Required Font Files

You need to add the following **Circular Std** font files to the `assets/fonts` directory:

1. **CircularStd-Book.otf** - Regular weight
2. **CircularStd-Medium.otf** - Medium weight
3. **CircularStd-Bold.otf** - Bold weight

## Where to Get Circular Std Fonts

You can obtain Circular Std fonts from:

1. **Purchase from Lineto**: https://lineto.com/typefaces/circular (Official source)
2. **Free alternatives**: Search for "Circular Std font download" or use similar alternatives like:
   - **Gotham Rounded**
   - **Avenir Next Rounded**
   - **TT Norms Pro**

## Installation Steps

1. Download the font files (.otf or .ttf format)
2. Copy them to: `/Users/saifulislam/Desktop/saiful/shipments-app/assets/fonts/`
3. Rename them exactly as:
   - `CircularStd-Book.otf`
   - `CircularStd-Medium.otf`
   - `CircularStd-Bold.otf`
4. Restart your development server

## Using the Fonts in Your Components

The fonts are now configured in Tailwind. You can use them with these classes:

- `font-sans` - Circular Std Book (regular)
- `font-medium` - Circular Std Medium
- `font-bold` - Circular Std Bold

### Example:

```tsx
<Text className="font-sans text-base">Regular text</Text>
<Text className="font-medium text-lg">Medium text</Text>
<Text className="font-bold text-xl">Bold text</Text>
```

### For Native React Native (without Tailwind):

```tsx
<Text style={{ fontFamily: 'CircularStd-Book' }}>Regular text</Text>
<Text style={{ fontFamily: 'CircularStd-Medium' }}>Medium text</Text>
<Text style={{ fontFamily: 'CircularStd-Bold' }}>Bold text</Text>
```

## What Has Been Set Up

✅ Font loading configured in `app/_layout.tsx`
✅ Tailwind config updated with font families
✅ Splash screen configured to wait for fonts to load
✅ Font directory created: `assets/fonts/`

## Next Steps

1. Add the three font files to `assets/fonts/`
2. Restart your Expo development server: `npm start` or `npx expo start`
3. The app will automatically load and use Circular Std fonts
