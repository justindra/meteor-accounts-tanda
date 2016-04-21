# accounts-tanda

A login service for [Tanda](https://www.tanda.co/).

## Installation

To add to your meteor package,

    meteor add justindra:accounts-tanda

Don't forget to add accounts-ui to make life easier

    meteor add accounts-ui

For the Tanda OAuth Flow Package, checkout [justindra:tanda](https://github.com/justindra/meteor-tanda) package.

### Custom Settings

If you would like to use a custom configuration, without using the `accounts-ui` package, you can use the `service-configuration` package.

    meteor add service-configuration

Then

    ServiceConfiguration.configurations.upsert(
        { service: 'tanda' },
        {
            $set: {
                clientId: "1292962797",
                loginStyle: "popup",
                secret: "75a730b58f5691de5522789070c319bc"
            }
        }
    );

More details about this method can be seen in the Accounts section in [Meteor Docs](http://docs.meteor.com/#/full/meteor_loginwithexternalservice)

## Usage

Use the command below

    Meteor.loginWithTanda({
            requestPermissions: ['user', 'roster']
        }, function (err) {
            if (err) console.log('errorMessage', err.reason || 'Unknown error');
    });
    
The `requestPermissions` are the Scopes defined in the [Tanda API Docs](https://my.tanda.co/api/v2/documentation#header-scopes). By default, the scope of `me` and `user` are included.

