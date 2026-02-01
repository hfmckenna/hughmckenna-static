import path from 'path';

export default {
    root: path.resolve(__dirname, 'src'),
    publicDir: path.resolve(__dirname, 'src'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
    },
};
