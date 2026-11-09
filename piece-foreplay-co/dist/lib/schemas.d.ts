import * as z from 'zod/mini';
export declare const findAdsSchema: z.ZodMiniObject<{
    query: z.ZodMiniOptional<z.ZodMiniString<string>>;
    start_date: z.ZodMiniOptional<z.ZodMiniString<string>>;
    end_date: z.ZodMiniOptional<z.ZodMiniString<string>>;
    order: z.ZodMiniOptional<z.ZodMiniEnum<{
        newest: "newest";
        oldest: "oldest";
        longest_running: "longest_running";
        most_relevant: "most_relevant";
    }>>;
    live: z.ZodMiniOptional<z.ZodMiniEnum<{
        true: "true";
        false: "false";
    }>>;
    display_format: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        video: "video";
        carousel: "carousel";
        image: "image";
        dco: "dco";
        dpa: "dpa";
        multi_images: "multi_images";
        multi_videos: "multi_videos";
        multi_medias: "multi_medias";
        event: "event";
        text: "text";
    }>>>;
    publisher_platform: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        facebook: "facebook";
        instagram: "instagram";
        audience_network: "audience_network";
        messenger: "messenger";
        tiktok: "tiktok";
        youtube: "youtube";
        linkedin: "linkedin";
        threads: "threads";
    }>>>;
    niches: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        accessories: "accessories";
        "app/software": "app/software";
        beauty: "beauty";
        "business/professional": "business/professional";
        education: "education";
        entertainment: "entertainment";
        fashion: "fashion";
        finance: "finance";
        food: "food";
        health: "health";
        home: "home";
        pets: "pets";
        sports: "sports";
        technology: "technology";
        travel: "travel";
        automotive: "automotive";
        other: "other";
    }>>>;
    market_target: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        b2b: "b2b";
        b2c: "b2c";
    }>>>;
    languages: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        english: "english";
        french: "french";
        german: "german";
        italian: "italian";
        "dutch, flemish": "dutch, flemish";
        spanish: "spanish";
        portuguese: "portuguese";
        romanian: "romanian";
        russian: "russian";
        chinese: "chinese";
        japanese: "japanese";
        korean: "korean";
        arabic: "arabic";
        hindi: "hindi";
    }>>>;
    cursor: z.ZodMiniOptional<z.ZodMiniString<string>>;
    limit: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
}, z.z.core.$strip>;
export declare const getAdByIdSchema: z.ZodMiniObject<{
    ad_id: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const getAdsByPageSchema: z.ZodMiniObject<{
    page_id: z.ZodMiniString<string>;
    start_date: z.ZodMiniOptional<z.ZodMiniString<string>>;
    end_date: z.ZodMiniOptional<z.ZodMiniString<string>>;
    order: z.ZodMiniOptional<z.ZodMiniEnum<{
        newest: "newest";
        oldest: "oldest";
        longest_running: "longest_running";
        most_relevant: "most_relevant";
    }>>;
    live: z.ZodMiniOptional<z.ZodMiniEnum<{
        true: "true";
        false: "false";
    }>>;
    display_format: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        video: "video";
        carousel: "carousel";
        image: "image";
        dco: "dco";
        dpa: "dpa";
        multi_images: "multi_images";
        multi_videos: "multi_videos";
        multi_medias: "multi_medias";
        event: "event";
        text: "text";
    }>>>;
    publisher_platform: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        facebook: "facebook";
        instagram: "instagram";
        audience_network: "audience_network";
        messenger: "messenger";
        tiktok: "tiktok";
        youtube: "youtube";
        linkedin: "linkedin";
        threads: "threads";
    }>>>;
    niches: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        accessories: "accessories";
        "app/software": "app/software";
        beauty: "beauty";
        "business/professional": "business/professional";
        education: "education";
        entertainment: "entertainment";
        fashion: "fashion";
        finance: "finance";
        food: "food";
        health: "health";
        home: "home";
        pets: "pets";
        sports: "sports";
        technology: "technology";
        travel: "travel";
        automotive: "automotive";
        other: "other";
    }>>>;
    market_target: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        b2b: "b2b";
        b2c: "b2c";
    }>>>;
    languages: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        english: "english";
        french: "french";
        german: "german";
        italian: "italian";
        "dutch, flemish": "dutch, flemish";
        spanish: "spanish";
        portuguese: "portuguese";
        romanian: "romanian";
        russian: "russian";
        chinese: "chinese";
        japanese: "japanese";
        korean: "korean";
        arabic: "arabic";
        hindi: "hindi";
    }>>>;
    cursor: z.ZodMiniOptional<z.ZodMiniString<string>>;
    limit: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
}, z.z.core.$strip>;
export declare const findBrandsSchema: z.ZodMiniObject<{
    query: z.ZodMiniString<string>;
    limit: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
}, z.z.core.$strip>;
export declare const findBoardsSchema: z.ZodMiniObject<{
    offset: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    limit: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
}, z.z.core.$strip>;
export declare const newAdInBoardSchema: z.ZodMiniObject<{
    board_id: z.ZodMiniString<string>;
    polling_interval: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    live: z.ZodMiniOptional<z.ZodMiniEnum<{
        true: "true";
        false: "false";
    }>>;
    display_format: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        video: "video";
        carousel: "carousel";
        image: "image";
        dco: "dco";
        dpa: "dpa";
        multi_images: "multi_images";
        multi_videos: "multi_videos";
        multi_medias: "multi_medias";
        event: "event";
        text: "text";
    }>>>;
    publisher_platform: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        facebook: "facebook";
        instagram: "instagram";
        audience_network: "audience_network";
        messenger: "messenger";
        tiktok: "tiktok";
        youtube: "youtube";
        linkedin: "linkedin";
        threads: "threads";
    }>>>;
    niches: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        accessories: "accessories";
        "app/software": "app/software";
        beauty: "beauty";
        "business/professional": "business/professional";
        education: "education";
        entertainment: "entertainment";
        fashion: "fashion";
        finance: "finance";
        food: "food";
        health: "health";
        home: "home";
        pets: "pets";
        sports: "sports";
        technology: "technology";
        travel: "travel";
        automotive: "automotive";
        other: "other";
    }>>>;
    market_target: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        b2b: "b2b";
        b2c: "b2c";
    }>>>;
    languages: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        english: "english";
        french: "french";
        german: "german";
        italian: "italian";
        "dutch, flemish": "dutch, flemish";
        spanish: "spanish";
        portuguese: "portuguese";
        romanian: "romanian";
        russian: "russian";
        chinese: "chinese";
        japanese: "japanese";
        korean: "korean";
        arabic: "arabic";
        hindi: "hindi";
    }>>>;
}, z.z.core.$strip>;
export declare const newAdInSpyderSchema: z.ZodMiniObject<{
    brand_id: z.ZodMiniString<string>;
    polling_interval: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    live: z.ZodMiniOptional<z.ZodMiniEnum<{
        true: "true";
        false: "false";
    }>>;
    display_format: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        video: "video";
        carousel: "carousel";
        image: "image";
        dco: "dco";
        dpa: "dpa";
        multi_images: "multi_images";
        multi_videos: "multi_videos";
        multi_medias: "multi_medias";
        event: "event";
        text: "text";
    }>>>;
    publisher_platform: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        facebook: "facebook";
        instagram: "instagram";
        audience_network: "audience_network";
        messenger: "messenger";
        tiktok: "tiktok";
        youtube: "youtube";
        linkedin: "linkedin";
        threads: "threads";
    }>>>;
    niches: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        accessories: "accessories";
        "app/software": "app/software";
        beauty: "beauty";
        "business/professional": "business/professional";
        education: "education";
        entertainment: "entertainment";
        fashion: "fashion";
        finance: "finance";
        food: "food";
        health: "health";
        home: "home";
        pets: "pets";
        sports: "sports";
        technology: "technology";
        travel: "travel";
        automotive: "automotive";
        other: "other";
    }>>>;
    market_target: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        b2b: "b2b";
        b2c: "b2c";
    }>>>;
    languages: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        english: "english";
        french: "french";
        german: "german";
        italian: "italian";
        "dutch, flemish": "dutch, flemish";
        spanish: "spanish";
        portuguese: "portuguese";
        romanian: "romanian";
        russian: "russian";
        chinese: "chinese";
        japanese: "japanese";
        korean: "korean";
        arabic: "arabic";
        hindi: "hindi";
    }>>>;
}, z.z.core.$strip>;
export declare const newSwipefileAdSchema: z.ZodMiniObject<{
    polling_interval: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    start_date: z.ZodMiniOptional<z.ZodMiniString<string>>;
    end_date: z.ZodMiniOptional<z.ZodMiniString<string>>;
    live: z.ZodMiniOptional<z.ZodMiniEnum<{
        true: "true";
        false: "false";
    }>>;
    display_format: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        video: "video";
        carousel: "carousel";
        image: "image";
        dco: "dco";
        dpa: "dpa";
        multi_images: "multi_images";
        multi_videos: "multi_videos";
        multi_medias: "multi_medias";
        event: "event";
        text: "text";
    }>>>;
    publisher_platform: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        facebook: "facebook";
        instagram: "instagram";
        audience_network: "audience_network";
        messenger: "messenger";
        tiktok: "tiktok";
        youtube: "youtube";
        linkedin: "linkedin";
        threads: "threads";
    }>>>;
    niches: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        accessories: "accessories";
        "app/software": "app/software";
        beauty: "beauty";
        "business/professional": "business/professional";
        education: "education";
        entertainment: "entertainment";
        fashion: "fashion";
        finance: "finance";
        food: "food";
        health: "health";
        home: "home";
        pets: "pets";
        sports: "sports";
        technology: "technology";
        travel: "travel";
        automotive: "automotive";
        other: "other";
    }>>>;
    market_target: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        b2b: "b2b";
        b2c: "b2c";
    }>>>;
    languages: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<{
        english: "english";
        french: "french";
        german: "german";
        italian: "italian";
        "dutch, flemish": "dutch, flemish";
        spanish: "spanish";
        portuguese: "portuguese";
        romanian: "romanian";
        russian: "russian";
        chinese: "chinese";
        japanese: "japanese";
        korean: "korean";
        arabic: "arabic";
        hindi: "hindi";
    }>>>;
}, z.z.core.$strip>;
//# sourceMappingURL=schemas.d.ts.map