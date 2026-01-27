const STATUS_CONFIG = {
    // Banner-Einstellungen
    // type: 'online' (grün), 'warning' (gelb), 'critical' (rot)
    globalStatus: {
        type: 'warning',
        message: 'Es kann zu ausfällen mit unserer neuen IP führen! Wir Arbeiten daran das Problem zu beheben!'
    },

    // UptimeRobot API Keys
    // Ersetze 'KEY_...' mit deinen echten Read-Only Keys
    monitors: {
        java:   'm802228348-28e6cbe112134f661ce9d6ac',
        web:    'KEY_WEBSITE', 
        player: 'KEY_PLAYERPORTAL',
        domain: 'KEY_DOMAIN'
    }
};
