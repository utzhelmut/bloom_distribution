page = PAGE
#page.config.metaCharset = utf-8
page{
    config {
       metaCharset = utf-8
       additionalHeaders = Content-Type:text/html;charset=utf-8
    }

    includeCSS.bootstrap = EXT:bloom_distribution/Resources/Public/Bootstrap/css/bootstrap.min.css
    includeCSS.bootstratheme = EXT:bloom_distribution/Resources/Public/Bootstrap/css/bootstrap-theme.min.css
    includeJS.bootstrap = EXT:bloom_distribution/Resources/Public/Bootstrap/js/bootstrap.min.js
    10 = FLUIDTEMPLATE
    10{

        file = EXT:bloom_distribution/Resources/Private/Template/index.html
        layoutRootPath = EXT:bloom_distribution/Resources/Private/Layouts/
        partialRootPath = EXT:bloom_distribution/Resources/Private/Partials/
        variables {
            hallo = TEXT
            hallo.value = HALLO WELT!
            content < styles.content.get
        }
    }
}



