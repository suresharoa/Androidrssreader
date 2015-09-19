var assetPath = './html/cfassets';
var mobileWebHandler = require(assetPath + '/mobileweb/compiled.server' + '/server.js');
var searchResultsPageHandler = require(assetPath + '/serp/compiled.server' + '/server.js');
var tileRoot = './tiles';
var tilesHandler = require(tileRoot + '/tilesHandler.js');
var t2Root = './t2';
var t2Handler = require(t2Root + '/t2Handler.js');

module.exports = [{
    method: 'POST',
    path: '/webnitro',
    handler: searchResultsPageHandler
}, {
    method: 'POST',
    path: '/uber',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/nitro',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/sale',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/rent',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/apartments-for-sale',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/apartments-for-rent',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/listing-search',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/project-search',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/apartments',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/{city}-property/{param*}',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/{params}/cfct-{param}',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/sem{params}',
    handler: mobileWebHandler
}, {
    method: 'POST',
    path: '/realestate/{params}/{params2}',
    handler: mobileWebHandler
}, {
    method: 'GET',
    path: '/map/tiles/v1/{tileType}/{z}/{x}/{y}.png',
    handler: tilesHandler.renderPng,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
}, {
    method: 'GET',
    path: '/map/tiles/v1/{tileType}/{z}/{x}/{y}.json',
    handler: tilesHandler.renderUtf,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{
    method: 'POST',
    path: '/{title}/pfbs-{id}',
    handler: t2Handler.renderPovpBuy,
},
{
    method: 'POST',
    path: '/{localityName}/market-trends-{localityId}',
    handler: t2Handler.renderMarketTrendsPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{cityName}-city',
    handler: t2Handler.renderCityOverviewPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{
    method: 'POST',
    path: '/video/video-{title}-{videoId}',
    handler: t2Handler.renderVideoDetailsPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
}, {
    method: 'POST',
    path: '/{title}/prns-{id}',
    handler: t2Handler.renderPovpRent,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
}, {
    method: 'POST',
    path: '/{title}/povp-{id}',
    handler: t2Handler.renderPovpOverview,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{

    method: 'POST',
    path: '/{title}/prdl-{id}',
    handler: t2Handler.renderPovpLocation,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{
    method: 'POST',
    path: '/guide/{title}-{id}',
    handler: t2Handler.renderArticleDetails,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{
    method: 'POST',
    path: '/contentwidget/{cityname}',
    handler: t2Handler.renderContentWidget,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{
    method: 'POST',
    path: '/agent/{agencyname}/cfap-{agentid}',
    handler: t2Handler.renderAgentOverviewPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{
    method: 'POST',
    path: '/agent/{agencyname}/cfap-{agentid}/listings-sale',
    handler: t2Handler.renderAgentListingsBuyPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/agent/{agencyname}/cfap-{agentid}/listings-rent',
    handler: t2Handler.renderAgentListingsRentPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{buildername}/builder/{builderid}',
    handler: t2Handler.renderBuilderOverviewPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{buildername}/builder/{builderid}/projects',
    handler: t2Handler.renderBuilderProjectPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{localityName}/lvp-{localityId}',
    handler: t2Handler.renderLocalityOverviewRvpPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{localityName}/rvp-{regionId}',
    handler: t2Handler.renderRegionOverviewRvpPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{localityName}/rvp-{localityId}/col-123',
    handler: t2Handler.renderLocalityCollectionCityPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/localities/index',
    handler: t2Handler.renderCityDirectoryPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{propertytype}-for-sale-in-{localityName}/cfri-{localityId}',
    handler: t2Handler.renderLocalityBuyPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/{propertytype}-for-rent-in-{localityName}/cfri-{localityId}',
    handler: t2Handler.renderLocalityRentPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},
{
    method: 'POST',
    path: '/locality-sneak-peak-{localityId}',
    handler: t2Handler.renderLocalitySneakPeakPage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{
    method: 'POST',
    path: '/',
    handler: t2Handler.renderHomePage,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
},{

    method: 'POST',
    path: '/contact-form',
    handler: t2Handler.renderContactForm,
    config: {
        state: {
            parse: false,
            failAction: 'ignore'
        }
    }
}];
