
app.directive('mySharedScope', function () {
    return {
        template: 'Name: {{customer.name}} Street: {{customer.street}}'
    };
});

app.directive('myIsolatedScope', function () {
    return {
        scope: {
        },
        template: 'Name: {{customer.name}} Street: {{customer.street}}'
    };
});

app.directive('myIsolatedScopeWithName', function () {
    return {
        scope: {
            name: '@name'
        },
        template: 'Name: {{ name }}'
    };
});
// <div my-isolated-scope-with-name name="{{ customer.name }}"></div>


app.directive('myIsolatedScopeWithName', function () {
    return {
        scope: {
            name: '&name'
        },
        template: '<div ng-click={{name}}/>'
    };
});
// <div my-isolated-scope-with-name name="method()" someOtherName="{{ customer.name }}"></div>
