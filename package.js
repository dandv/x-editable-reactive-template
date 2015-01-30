'use strict';
Package.describe({
    summary: 'x-editable in a Blaze template, taking care of reactive updates to x-editable automatically',
    version: '1.0.1',
    git: 'https://github.com/1024kilobyte/x-editable-reactive-template.git',
    name: '1024kilobyte:x-editable-reactive-template'
});

Package.on_use(function (api) {
    api.versionsFrom('0.9.0');
    api.use([
        'templating'
    ], 'client');

    api.use([
        '1024kilobyte:x-editable-bootstrap'
    ], 'client', { weak: true });

    api.addFiles([
        'main.html',
        'main.js'
    ], 'client');
});
