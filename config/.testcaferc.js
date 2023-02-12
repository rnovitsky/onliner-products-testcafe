module.exports =  {
    'src': './tests/productsSections.js',
    'baseUrl': 'https://catalog.onliner.by',
    'browsers': process.env.CI ? 'chrome:headless' : 'chrome --start-maximized',
    'concurrency': process.env.CI ? 3 : 1,
    'selectorTimeout': 5000,
    'assertionTimeout': 5000,
    'pageLoadTimeout': 20000,
    'screenshots': {
        'path': './output/screenshots',
        'pathPattern': '${DATE}_${TIME}/${FIXTURE}/${TEST}.png',
        'takeOnFails': true,
        'fullPage': true,
        'thumbnails': false
    },
    'reporter': [
        {
            'name': 'spec'
        },
        {
            'name': 'html',
            'output': './output/reports/report.html'
        },
    ]
}