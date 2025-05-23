export const HOME_QUERY = `{
    homePage {
        bannerVisible
        bannerText
        bannerCtaText
        bannerCtaLink
        aboutHeading
        aboutImage {
            url
        }
        illustration {
            url
        }
        clientsImage {
            url
        }
        clientsIntro
        clientsIllustration {
            url
        }
        philosophy
        services
        ourOrigins
        illustrationPhil {
            url
        }
        teamIntro
        teamMembers {
            name
            info
            linkedin
            role
            portrait {
                url
            }
        }
        footerImage {
            url
            width
            height
        }
    }
}`

export const WORK_QUERY = `{
    allCaseStudies {
        title
        thumbnail {
            url
            width
            height
        }
        thumbnailCredit
        client
        theChallenge
        theAsk
        whatWeDid
        howWeDidIt
        size
        slug
        seo {
            title
            description
            image {
                url
                width
                height
            }
        }
        images {
            image {
                url
            }
            credit
        }
    }
}`

export const ARTICLE_QUERY = `{
    allJournalArticles {
        title
        shortIntro
        slug
        firstParagraph
        image {
            url
            width
            height
        }
        articleBody
        socialFields {
            title
            description
            image {
                url
            }
        }
    }
}`
export const JOURNAL_QUERY = `{
    journalPage {
        journalText
    }
}`
export const CONTACT_QUERY = `{
    contactPage {
        contactIntro
        address
        phoneNumber
        email
        twitterLink
        linkedinLink
        instagramLink
        image {
            url
        }
    }
}`

export const CLIENTS_QUERY = `{
    clientsPage {
        clientsText
        clientList {
            name
            startLetter
        }
        illustration {
            url
        }
    }
}`
export const ABOUT_QUERY = `{
    aboutPage {
        aboutIntro
        about
        image1 {
            url
        }
        originsText
        originsImage1 {
            url
        }
        originsImage2 {
            url
        }
        philosophyText
        servicesText
        services {
            title
        }
        servicesImage {
            url
        }
        imageCredit
    }
}`

