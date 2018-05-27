/* Dist remove folders*/

module.exports = {
    install: {
        options: {
            force: true
        },
        src: ['src/assets/lib']
    },
    dist: {
        src: ['dist']
    },
    final: {
        options: {
            force: true
        },
        src: ['../../../../public/themes/beagle/dist']
    }
};
