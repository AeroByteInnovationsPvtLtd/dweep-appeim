import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      minify: 'esbuild',
      cssCodeSplit: true,
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['@material-ui/core', '@material-ui/icons', '@material-ui/lab'],
            utils: ['axios', 'classnames'],
          },
          // Optimize asset file names
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const extType = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            if (/css/i.test(extType)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
      chunkSizeWarningLimit: 1000,
      // Optimize for production
      target: 'esnext',
      reportCompressedSize: false,
    },
    server: {
      port: 5173,
      host: true,
      fs: {
        allow: ['..'],
      },
      // Proxy API calls to backend during development
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL || 'http://localhost:5002',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: {
      port: 4173,
      host: true,
    },
    optimizeDeps: {
      include: [
        '@material-ui/core',
        '@material-ui/icons',
        'react',
        'react-dom',
        'react-router-dom',
        'axios'
      ],
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    // Environment variables
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  };
});
