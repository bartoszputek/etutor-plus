# eTutor Plus

A Chrome extension that enhances eTutor learning experience by adding low-hanging fruits to the eTutor platform.

## Features

- Cambridge Dictionary integration in the repetition module
- Add missing key bindings to the additional recordings

## Development

```bash
# install dependencies
pnpm i

# build files to `/dist` directory
# HMR for extension pages and content scripts
pnpm run dev
```

### Load unpacked extensions

[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/dist` directory.

## Build

```bash
# build files to `/dist` directory
$ npm run build
```

## Credits

- https://github.com/NekitCorp/chrome-extension-svelte-typescript-boilerplate

## License

You can check out the full license [here](./LICENSE)

This project is licensed under the terms of **the MIT license**.
