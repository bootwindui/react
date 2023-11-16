# Bootwind React UI Components

## Contributing

Bootwind uses [nx](https://github.com/nrwl/nx) as monorepo build system. You can install it globally by running `pnpm i -g nx`

1. Clone the repository
```sh
git clone https://github.com/bootwindui/bootwind
cd bootwind
```

2. Install deps
```sh
pnpm install
```

3. Run storybook locally

```sh 
nx run ui:storybook
```

4. Create new component (e.g. card component). Change `card` to your desired component name
```sh
nx g @nrwl/react:lib card
```

5. Generate stories from component
```sh
nx g @nx/react:storybook-configuration card
```

