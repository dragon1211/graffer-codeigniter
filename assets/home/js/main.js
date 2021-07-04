beaconJsonp([2], [, , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "i", function() { return r }), n.d(t, "j", function() { return i }), n.d(t, "b", function() { return o }), n.d(t, "m", function() { return c }), n.d(t, "g", function() { return s }), n.d(t, "H", function() { return u }), n.d(t, "_27", function() { return l }), n.d(t, "y", function() { return d }), n.d(t, "z", function() { return f }), n.d(t, "n", function() { return b }), n.d(t, "I", function() { return p }), n.d(t, "J", function() { return h }), n.d(t, "P", function() { return m }), n.d(t, "K", function() { return g }), n.d(t, "Q", function() { return v }), n.d(t, "O", function() { return O }), n.d(t, "u", function() { return j }), n.d(t, "t", function() { return y }), n.d(t, "B", function() { return _ }), n.d(t, "N", function() { return A }), n.d(t, "_13", function() { return C }), n.d(t, "d", function() { return E }), n.d(t, "p", function() { return w }), n.d(t, "f", function() { return x }), n.d(t, "s", function() { return S }), n.d(t, "_15", function() { return T }), n.d(t, "_14", function() { return k }), n.d(t, "U", function() { return I }), n.d(t, "V", function() { return M }), n.d(t, "D", function() { return N }), n.d(t, "L", function() { return L }), n.d(t, "_34", function() { return P }), n.d(t, "r", function() { return F }), n.d(t, "e", function() { return B }), n.d(t, "Y", function() { return R }), n.d(t, "h", function() { return D }), n.d(t, "_6", function() { return U }), n.d(t, "_35", function() { return H }), n.d(t, "_31", function() { return z }), n.d(t, "_28", function() { return W }), n.d(t, "a", function() { return G }), n.d(t, "X", function() { return q }), n.d(t, "_22", function() { return V }), n.d(t, "_23", function() { return Y }), n.d(t, "_18", function() { return Q }), n.d(t, "_19", function() { return J }), n.d(t, "_20", function() { return K }), n.d(t, "R", function() { return Z }), n.d(t, "_39", function() { return X }), n.d(t, "_36", function() { return $ }), n.d(t, "S", function() { return ee }), n.d(t, "_1", function() { return te }), n.d(t, "_2", function() { return ne }), n.d(t, "_33", function() { return ae }), n.d(t, "_16", function() { return re }), n.d(t, "_17", function() { return ie }), n.d(t, "c", function() { return oe }), n.d(t, "_26", function() { return ce }), n.d(t, "_37", function() { return se }), n.d(t, "_38", function() { return ue }), n.d(t, "_21", function() { return le }), n.d(t, "_24", function() { return de }), n.d(t, "_30", function() { return fe }), n.d(t, "_32", function() { return be }), n.d(t, "w", function() { return pe }), n.d(t, "x", function() { return he }), n.d(t, "E", function() { return me }), n.d(t, "F", function() { return ge }), n.d(t, "G", function() { return ve }), n.d(t, "_25", function() { return Oe }), n.d(t, "M", function() { return je }), n.d(t, "A", function() { return ye }), n.d(t, "C", function() { return _e }), n.d(t, "v", function() { return Ae }), n.d(t, "T", function() { return Ce }), n.d(t, "k", function() { return Ee }), n.d(t, "_0", function() { return we }), n.d(t, "q", function() { return xe }), n.d(t, "W", function() { return Se }), n.d(t, "Z", function() { return Te }), n.d(t, "l", function() { return ke }), n.d(t, "o", function() { return Ie }), n.d(t, "_3", function() { return Me }), n.d(t, "_4", function() { return Ne }), n.d(t, "_7", function() { return Le }), n.d(t, "_8", function() { return Pe }), n.d(t, "_9", function() { return Fe }), n.d(t, "_10", function() { return Be }), n.d(t, "_11", function() { return Re }), n.d(t, "_12", function() { return De }), n.d(t, "_29", function() { return Ue }), n.d(t, "_5", function() { return He });
    var a = n(30),
        r = "CHAT_BOT_TYPING",
        i = "CHAT_BOT_TYPING_STOP",
        o = "ADD_CHAT_INPUT_ERROR",
        c = "CLEAR_CHAT_INPUT_ERROR",
        s = "AGENT_DISCONNECTED",
        u = Object(a.a)("FETCH_CONFIG"),
        l = "UPDATE_CONFIG",
        d = "DEMO",
        f = "DEMO_END",
        b = "CLEAR_CONVERSATION",
        p = Object(a.a)("FETCH_CONVERSATION"),
        h = Object(a.a)("FETCH_CONVERSATIONS"),
        m = Object(a.a)("FETCH_THREADS"),
        g = Object(a.a)("FETCH_CONVERSATION_COUNT"),
        v = Object(a.a)("FETCH_UNREAD_MESSAGES_COUNT"),
        O = Object(a.a)("FETCH_SUGGESTIONS"),
        j = "CLOSE_ARTICLE",
        y = "CLOSE_ALL_ARTICLES",
        _ = Object(a.a)("FETCH_ARTICLE"),
        A = Object(a.a)("FETCH_SEARCH_RESULTS"),
        C = Object(a.a)("SUBMIT_ARTICLE_FEEDBACK"),
        E = "ADD_MESSAGE_ERROR",
        w = "CLEAR_MESSAGE_ERRORS",
        x = "ADD_REPLY_ERROR",
        S = "CLEAR_REPLY_ERRORS",
        T = "SUBMIT_REPLY_START",
        k = "SUBMIT_REPLY_END",
        I = Object(a.a)("POST_MESSAGE"),
        M = Object(a.a)("POST_REPLY"),
        N = Object(a.a)("FETCH_AVATARS"),
        L = Object(a.a)("FETCH_CUSTOM_FIELDS"),
        P = "UPDATE_REPLY",
        F = "CLEAR_REPLY",
        B = "ADD_REPLY_ATTACHMENT",
        R = "REMOVE_REPLY_ATTACHMENT",
        D = "CALL_DEFERRED_SUGGESTIONS",
        U = "SET_DEFERRED_SUGGESTIONS",
        H = "UPDATE_REPLY_ATTACHMENT_PROGRESS",
        z = "UPDATE_MESSAGE",
        W = "UPDATE_CUSTOM_FIELD",
        G = "ADD_ATTACHMENT",
        q = "REMOVE_ATTACHMENT",
        V = "UPDATE_ATTACHMENT_PROGRESS",
        Y = "UPDATE_CHAT_AVAILABILITY_INFO",
        Q = "TOGGLE_BEACON",
        J = "TOGGLE_CONTAINER_MOUNT",
        K = "TOGGLE_FULL_SCREEN",
        Z = "IDENTIFY_USER",
        X = "USER_EMAIL_CHANGED",
        $ = "UPDATE_USER_AUTH",
        ee = "MARK_CUSTOMER_FOR_SYNC",
        te = "RESET_CUSTOMER_SYNC",
        ne = "RESET_DEVICE_ID",
        ae = "UPDATE_PROFILE",
        re = Object(a.a)("SYNC_CUSTOMER"),
        ie = "TIMELINE_EVENT",
        oe = "ADD_CHAT_MESSAGE",
        ce = "UPDATE_CHAT_IMAGE_DIMENSIONS",
        se = Object(a.a)("UPLOAD_CHAT_FILE"),
        ue = Object(a.a)("UPLOAD_CHAT_FILE_TO_CHAT_API"),
        le = "UPDATE_AGENT",
        de = "UPDATE_CHAT_DATA",
        fe = "UPDATE_IS_AGENT_TYPING",
        be = "UPDATE_MESSAGE_BODY",
        pe = Object(a.a)("CREATE_CHAT_ENVELOPE"),
        he = Object(a.a)("CREATE_CHAT_MESSAGE"),
        me = Object(a.a)("FETCH_CHAT_ENVELOPE"),
        ge = Object(a.a)("FETCH_CHAT_EVENT"),
        ve = Object(a.a)("FETCH_CHAT_EVENTS"),
        Oe = Object(a.a)("UPDATE_CHAT_EVENT"),
        je = Object(a.a)("FETCH_JWT"),
        ye = Object(a.a)("END_CHAT"),
        _e = Object(a.a)("FETCH_AVAILABLE_AGENTS"),
        Ae = Object(a.a)("CREATE_BEACON_CLOSED_EVENT"),
        Ce = Object(a.a)("MARK_MESSAGES_AS_SEEN"),
        Ee = "CHAT_ENDED",
        we = "RESET_CHAT",
        xe = "CLEAR_NOTIFICATIONS",
        Se = Object(a.a)("REFETCH_CHAT_ENVELOPE"),
        Te = "RESET_BEACON",
        ke = "CLEAR_ACTIVE_MESSAGE",
        Ie = "CLEAR_INLINE_ARTICLE",
        Me = "SET_ACTIVE_MESSAGE",
        Ne = "SET_CHAT_MESSAGE_ID",
        Le = "SET_INLINE_ARTICLE",
        Pe = "SET_PREVIEW_MESSAGE",
        Fe = "SET_SESSION_DATA",
        Be = "SET_SYNCED_CUSTOMER_HASH",
        Re = "SET_TIME_ON_PAGE_TIMEOUT_ID",
        De = "SET_UNSHOWN_API_MESSAGES",
        Ue = "UPDATE_EVENT_BASED_CONDITIONS_STATE",
        He = Object(a.a)("SET_CHAT_RATING")
}, function(e, t, n) {
    "use strict";
    n.d(t, "F", function() { return v }), n.d(t, "d", function() { return j }), n.d(t, "c", function() { return y }), n.d(t, "l", function() { return _ }), n.d(t, "n", function() { return A }), n.d(t, "m", function() { return C }), n.d(t, "I", function() { return E }), n.d(t, "H", function() { return w }), n.d(t, "J", function() { return x }), n.d(t, "G", function() { return S }), n.d(t, "e", function() { return T }), n.d(t, "f", function() { return k }), n.d(t, "x", function() { return I }), n.d(t, "g", function() { return M }), n.d(t, "h", function() { return N }), n.d(t, "j", function() { return L }), n.d(t, "i", function() { return F }), n.d(t, "k", function() { return B }), n.d(t, "t", function() { return R }), n.d(t, "E", function() { return D }), n.d(t, "p", function() { return U }), n.d(t, "q", function() { return H }), n.d(t, "w", function() { return z }), n.d(t, "o", function() { return W }), n.d(t, "b", function() { return G }), n.d(t, "D", function() { return q }), n.d(t, "A", function() { return V }), n.d(t, "B", function() { return Y }), n.d(t, "y", function() { return Q }), n.d(t, "z", function() { return J }), n.d(t, "v", function() { return K }), n.d(t, "u", function() { return Z }), n.d(t, "C", function() { return X }), n.d(t, "s", function() { return $ }), n.d(t, "r", function() { return ee }), n.d(t, "K", function() { return te });
    var a = n(18),
        r = n(5),
        i = n(28),
        o = n.n(i),
        c = n(221),
        s = n(31),
        u = n(19),
        l = (n.n(u), n(11)),
        d = n(133),
        f = n(107),
        b = n(310),
        p = n(26),
        h = n(132),
        m = (n.n(h), ["isError"]),
        g = { autoFocus: !0, enableFabAnimation: !0, enablePreviousMessages: !0, enableSounds: !0, hideAvatars: !1, hideFABLabelOnMobile: !1, hideFABOnMobile: !1, noCache: !1, positionAbsolute: !1, showPrefilledCustomFields: !1 },
        v = Object(r.a)({ beaconId: "0c09af96-546a-4e40-a797-e747d74d5258", name: "Demo Beacon", docsEnabled: !0, messagingEnabled: !0, display: { style: "icon", iconImage: "beacon", color: "#7E80E7", position: "right", showPoweredBy: !0, zIndex: void 0 }, messaging: { mailboxId: 1, expectedResponseTime: "day", authType: "basic", contactForm: { showName: !0, showSubject: !0, allowAttachments: !0, customFieldsEnabled: !0, showGetInTouch: !0 } }, labels: Object(f.a)() }, g),
        O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case l.H.REQUEST:
                    return e;
                case l.H.SUCCESS:
                    var n = t.data,
                        i = n.id,
                        o = n.display,
                        s = n.messaging,
                        u = (n.isError, Object(a.a)(n, m)),
                        d = Object.keys(g),
                        b = {};
                    return d.forEach(function(t) { return b[t] = e[t] }), Object(r.a)(Object(r.a)(Object(r.a)({}, u), {}, { beaconId: i, mailboxId: s && s.mailboxId, color: o.color, mode: o.focusMode }, b), {}, { labels: Object(f.a)(n.labels) });
                case l.H.FAILURE:
                    return { isError: !0 };
                case l._27:
                    var p = function(e, t) { return t },
                        h = Object(c.a)(e, t.config, { arrayMerge: p });
                    return h.labels = Object(f.a)(h.labels), h.color && h.display && (h.display.color = h.color), h;
                default:
                    return e
            }
        },
        j = function(e) { return e.config.beaconId },
        y = function(e) { return e.config },
        _ = function(e) { return o()(e, "config.docs.domains") },
        A = function(e) { return o()(e, "config.docs.siteVisible") },
        C = function(e) { return e.config.docsEnabled },
        E = function(e) { return e.config.messaging.chat.requireEmail },
        w = function(e) { return C(e) },
        x = function(e) { return e.config.messagingEnabled },
        S = function(e) { return e.config.messaging.chatEnabled },
        T = function(e) { return e.config.messaging.chat },
        k = function(e) { return e.config.noCache ? s.a : s.b },
        I = function(e) { return e.config.labels },
        M = function(e) { return o()(e, "config.display.color") },
        N = function(e) { return o()(e, "config.companyName") },
        L = function(e) { return o()(e, "config.display.style") },
        P = function(e) { return o()(e, "config.display.position") },
        F = function(e) { return "left" === P(e) },
        B = function(e) { return "manual" === L(e) },
        R = function(e) { return o()(e, "config.positionAbsolute") },
        D = function(e) { var t = o()(e, "config.display.zIndex"); return Object(u.isNumber)(t) ? t : d.a.ContainerFrame },
        U = function(e) { return D(e) + 1 },
        H = function(e) { return o()(e, "config.mode") === b.a },
        z = function(e) { return o()(e, "config.mode") === b.b },
        W = function(e) { return o()(e, "config.messaging.expectedResponseTime") },
        G = function(e) { return o()(e, "config.autoFocus") },
        q = function(e) { return !!Object(p.d)(e) },
        V = function(e) { return o()(e, "config.messages", []) },
        Y = Object(h.createSelector)(V, function(e) { return e.filter(function(e) { return "selected" !== e.audience }) }),
        Q = function(e, t) {
            var n = V(e),
                a = n.filter(function(e) { return e.id === t });
            return a.length > 0 ? a[0] : null
        },
        J = function(e) { return e.config.messaging },
        K = function(e) { return o()(e, "config.enablePreviousMessages") },
        Z = function(e) { return o()(e, "config.display.showPoweredBy") },
        X = function(e) { return o()(e, "config.showPrefilledCustomFields") },
        $ = function(e) { return o()(e, "config.messaging.contactForm.customFieldsEnabled") },
        ee = function(e) { return o()(e, "config.messaging.chat.ratingsEnabled") },
        te = function(e) { return w(e) && x(e) };
    t.a = O
}, , , , function(e, t, n) {
    "use strict";
    var a = n(444),
        r = n.n(a),
        i = n(71),
        o = Object(i.b)("production") ? a.LOG_LEVELS.ERROR : Object(i.b)("test") ? a.LOG_LEVELS.SILENT : a.LOG_LEVELS.LOG,
        c = r()({ logLevel: o });
    t.a = c
}, , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return d }), n.d(t, "e", function() { return f }), n.d(t, "d", function() { return b }), n.d(t, "b", function() { return p }), n.d(t, "a", function() { return h });
    var a = n(11),
        r = n(59),
        i = n(41),
        o = n(88),
        c = n(72),
        s = n(12),
        u = n(35),
        l = n(56),
        d = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.url,
                d = void 0 === n ? window.location.href : n,
                f = t.title,
                b = void 0 === f ? document.title : f;
            return function(t, n) {
                var f = n(),
                    p = Object(s.c)(f);
                e ? (t(Object(r.a)({ url: d, title: b, name: p.name })), Object(i.d)(f) && t(Object(c.c)()), Object(s.b)(f) && (t(Object(o.b)()), t(Object(o.c)()))) : Object(u.h)(f) && t(Object(l.h)()), t({ type: a._18, isOpened: e })
            }
        },
        f = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return { type: a._20, isOpened: e, contents: t } },
        b = function(e) { return { type: a._19, isMounted: e } },
        p = function(e, t, n) { return { type: a._7, payload: { id: e, type: t, data: n } } },
        h = function() { return { type: a.o } }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return l }), n.d(t, "e", function() { return f }), n.d(t, "c", function() { return b }), n.d(t, "f", function() { return p }), n.d(t, "d", function() { return h });
    var a = n(18),
        r = n(5),
        i = n(11),
        o = n(132),
        c = (n.n(o), n(134)),
        s = ["avatar", "company", "jobTitle"],
        u = { email: "", name: "", signature: "", identified: !1 },
        l = function(e, t, n) { return t ? "Beacon Email=".concat(e, ",Signature=").concat(t) : e ? "Beacon Email=".concat(e, ",DeviceId=").concat(n) : "" },
        d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case i.R:
                    var n = t.user,
                        a = n.name,
                        o = void 0 === a ? "" : a,
                        c = n.email,
                        s = void 0 === c ? "" : c,
                        l = n.signature,
                        d = void 0 === l ? "" : l,
                        f = t.identified,
                        b = { name: o, email: s, signature: d };
                    return "undefined" !== typeof f && (b.identified = f), Object(r.a)(Object(r.a)({}, e), b);
                case i.Z:
                    var p = e.signature,
                        h = e.identified;
                    return p || h ? e : u;
                default:
                    return e
            }
        },
        f = function(e) { return e.user },
        b = Object(o.createSelector)(f, c.b, function(e, t) {
            var n = e.name,
                r = t.avatar,
                i = t.company,
                o = t.jobTitle,
                c = Object(a.a)(t, s),
                u = { name: n, attributes: c };
            return r && (u.avatar = r), i && (u.company = i), o && (u.jobTitle = o), u
        }),
        p = Object(o.createSelector)(f, function(e) { return e.email }),
        h = Object(o.createSelector)(f, function(e) { return e && e.email && e.identified });
    t.a = d
}, , , , function(e, t, n) {
    "use strict";
    var a = n(409),
        r = n(75);
    n.d(t, "b", function() { return r.b }), n.d(t, "a", function() { return r.a }), n.d(t, "c", function() { return r.c }), n.d(t, "f", function() { return r.e }), n.d(t, "g", function() { return r.f }), n.d(t, "e", function() { return r.d }), t.d = a.a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "b", function() { return r }), n.d(t, "c", function() { return i }), n.d(t, "e", function() { return o }), n.d(t, "d", function() { return c }), n.d(t, "f", function() { return s });
    var a = "https://beaconapi.helpscout.net",
        r = "https://d3hb14vkzrxvla.cloudfront.net",
        i = "https://chatapi.helpscout.net",
        o = "e715f34dfbd75ea91468",
        c = "helpscout",
        s = "https://endpoint1.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV0oCnAGiIN3ha-1ReTFUmYQKEeuU1KfmmWiyiPmKlUCXWx21t8eZ5Qa3ZQ-73kqVT1OU8skHKZRb7KRrp4nhOnFPxUcOnIShyQTcFKVsEogqg=="
}, , function(e, t, n) {
    "use strict";
    n.d(t, "h", function() { return v }), n.d(t, "e", function() { return _ }), n.d(t, "b", function() { return A }), n.d(t, "a", function() { return C }), n.d(t, "g", function() { return E }), n.d(t, "c", function() { return w }), n.d(t, "d", function() { return x }), n.d(t, "f", function() { return S });
    var a = n(57),
        r = n(98),
        i = (n.n(r), n(60)),
        o = n(16),
        c = n(30),
        s = n(31),
        u = n(59),
        l = n(36),
        d = n(11),
        f = n(61),
        b = n(136),
        p = n(476),
        h = n(12),
        m = n(50),
        g = this,
        v = function(e, t) {
            return function(n, a) {
                if (e && ("positive" === t || "negative" === t)) {
                    var r = a(),
                        i = r.config.noCache,
                        o = Object(l.c)(r),
                        u = Object(h.d)(r);
                    return Object(c.b)(n, { actions: d._13, method: "put", deviceId: o, noCache: i, url: "".concat(s.a, "/v1/").concat(u, "/docs/articles/").concat(e, "/feedback/").concat(o), payload: { id: e, rating: t }, withCredentials: !0 })
                }
            }
        },
        O = function() { return { type: d.O.REQUEST } },
        j = function(e) { return { type: d.O.SUCCESS, data: e } },
        y = function() {
            return function(e, t) {
                var n = t(),
                    a = Object(m.k)(n),
                    r = a.fn,
                    i = a.suggestions;
                e({ type: d.h }), e(i && i.length > 0 ? r.apply(g, [Object(h.d)(n), i]) : r.apply(g, [Object(h.d)(n)], {}))
            }
        },
        _ = function(e, t, n) {
            return function() {
                for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                return b.a.apply(void 0, [function(a, i) {
                    var o = window.location.href,
                        u = i(),
                        f = Object(h.d)(u);
                    if (Object(m.l)(u)) return void a(y());
                    var b = u.config,
                        p = b.noCache,
                        g = Object(l.c)(u);
                    return Object(c.b)(a, { actions: d.O, url: "".concat(s.a, "/v1/").concat(f, "/docs/suggestions?").concat(Object(r.stringify)({ url: o })), payload: e, deviceId: g, callWithDelay: n, cancelToken: t, noCache: p, withCredentials: !0 })
                }, "smartSuggestions"].concat(i))
            }
        },
        A = function() { return { type: d.u } },
        C = function() { return function(e) { e({ type: d.t }) } },
        E = function(e, t) {
            return function(n, r) {
                var c = Object(l.c)(r());
                n(O());
                var u = t.filter(function(e) { return "object" !== Object(a.a)(e) });
                return 0 === u.length ? n(j(Object(p.a)(t))) : Object(i.a)({ deviceId: c }).get("".concat(s.a, "/v1/").concat(e, "/docs/articles?ids=").concat(u.join(","))).then(function(e) {
                    var a = e.data;
                    n(j(Object(p.a)(t, a)))
                }).catch(function(e) { return o.a.log("Error fetching articles by ID", e) })
            }
        },
        w = function(e, t) {
            var n = e.id,
                a = e.isChild;
            return function(e, r, i) {
                var o = i.events,
                    u = r(),
                    b = u.config,
                    p = b.noCache,
                    m = Object(h.d)(u),
                    g = Object(l.c)(u);
                return o && o.emit(f.a, { id: n }), Object(c.b)(e, { actions: d.B, url: "".concat(s.a, "/v1/").concat(m, "/docs/articles/").concat(n, "?deviceId=").concat(g), payload: { id: n, isChild: a }, deviceId: g, cancelToken: t, noCache: p, withCredentials: !0 })
            }
        },
        x = function(e, t) {
            var n = e.query;
            return function(e, a, r) {
                var i = r.events,
                    o = a(),
                    b = o.config,
                    p = o.config.beaconId,
                    h = b.noCache,
                    m = Object(l.c)(a());
                return e(Object(u.h)({ url: window.location.href, query: n })), i && i.emit(f.j, { query: n }), Object(c.b)(e, { actions: d.N, url: "".concat(s.a, "/v1/").concat(p, "/docs/articles?query=").concat(encodeURIComponent(n)), payload: { query: n }, deviceId: m, cancelToken: t, noCache: h, withCredentials: !0 })
            }
        },
        S = function(e) { return { type: d._6, payload: e } }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "t", function() { return j }), n.d(t, "h", function() { return y }), n.d(t, "f", function() { return A }), n.d(t, "s", function() { return C }), n.d(t, "n", function() { return E }), n.d(t, "q", function() { return w }), n.d(t, "c", function() { return x }), n.d(t, "d", function() { return S }), n.d(t, "i", function() { return T }), n.d(t, "o", function() { return k }), n.d(t, "p", function() { return I }), n.d(t, "e", function() { return M }), n.d(t, "v", function() { return N }), n.d(t, "k", function() { return L }), n.d(t, "j", function() { return P }), n.d(t, "m", function() { return F }), n.d(t, "l", function() { return B }), n.d(t, "b", function() { return R }), n.d(t, "r", function() { return D }), n.d(t, "g", function() { return U }), n.d(t, "u", function() { return H });
    var a = n(5),
        r = n(22),
        i = n(18),
        o = n(132),
        c = (n.n(o), n(28)),
        s = n.n(c),
        u = n(75),
        l = n(49),
        d = n(11),
        f = n(450),
        b = n(220),
        p = n(461),
        h = n(12),
        m = n(293),
        g = { id: "", ariaLiveMessage: "", state: l.d.EMPTY, availableAgents: Object(u.c)(), envelope: Object(u.c)(), hasAvailableAgents: !1, lastAgentEventId: "", messageBody: "", messageId: null, messages: [], notifications: [], persistedMessages: [], rating: { comment: "", isError: !1, rating: "" }, subject: "", chatEndReason: "" },
        v = Object(i.a)(g, ["availableAgents", "hasAvailableAgents"]),
        O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case d.i:
                    var n = { author: { type: l.a.system }, body: "", createdAt: Object(b.k)(e.messages), type: l.f.indicator },
                        i = [].concat(Object(r.a)(e.messages), [n]);
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: i });
                case d.j:
                    var o = e.messages,
                        c = o.findIndex(function(e) { return e.author.type === l.a.system && e.type === l.f.indicator });
                    return c > -1 && (o = o.filter(function(e, t) { return t !== c })), Object(a.a)(Object(a.a)({}, e), {}, { messages: o });
                case d.g:
                    return Object(a.a)(Object(a.a)({}, e), {}, { state: l.d.AGENT_DISCONNECTED });
                case d.c:
                    var s = t.payload.message;
                    s.createdAt || (s.createdAt = Object(b.k)(e.messages)), !s.rawBody && s.body && (s.rawBody = s.body);
                    var h = [].concat(Object(r.a)(e.messages), [s]),
                        m = t.persist ? [].concat(Object(r.a)(e.persistedMessages), [s]) : e.persistedMessages;
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: h, ariaLiveMessage: Object(b.b)(s), persistedMessages: m });
                case d._26:
                    var O = t.payload,
                        j = O.id,
                        y = O.height,
                        _ = O.width;
                    return y && _ ? Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.l)(e.messages, j, function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { height: y, width: _ }) }) }) : e;
                case d.x.FAILURE:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.f)(e.messages, t.payload.id) });
                case d.x.SUCCESS:
                    var A = new Date(t.data.events.results[0].createdAt),
                        C = e.messages;
                    return C = Object(b.h)(C, t.payload.id), C = Object(b.i)(C, t.payload.id, A), Object(a.a)(Object(a.a)({}, e), {}, { messages: C });
                case d._21:
                    return Object(a.a)(Object(a.a)({}, e), {}, { envelope: Object(a.a)(Object(a.a)({}, e.envelope), {}, { data: Object(p.a)(e.envelope.data, t.agent) }), state: l.d.AGENT_CONNECTED });
                case d._30:
                    var E = t.isTyping,
                        w = t.timeoutId,
                        x = t.agent,
                        S = e.messages.slice(),
                        T = S.findIndex(function(e) { return e.type === l.f.indicator });
                    if (!0 === E && -1 === T) {
                        var k = { author: x, body: "", createdAt: Object(b.k)(e.messages), type: l.f.indicator };
                        S.push(k)
                    } else !1 === E && -1 !== T && (S = Object(f.d)(S));
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: S, timeoutId: w });
                case d._24:
                    return Object(a.a)(Object(a.a)({}, e), t.payload);
                case d._32:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messageBody: t.messageBody });
                case d.w.SUCCESS:
                    var I = Object(u.f)(e, "envelope", { data: t.data }),
                        M = new Date(I.envelope.data.createdAt),
                        N = M.getTime() - I.messages.length;
                    return I.messages.map(function(e, t) { return e.createdAt = new Date(N + t) }), I.persistedMessages.map(function(e, t) { return e.createdAt = new Date(N + t) }), Object(a.a)(Object(a.a)({}, I), {}, { id: t.data.id, state: l.d.AGENT_WAITING });
                case d.T.SUCCESS:
                case d.E.SUCCESS:
                    var L = Object(u.f)(e, "envelope", { data: t.data }),
                        P = t.data,
                        F = P.events,
                        B = F.results,
                        R = F.pagination,
                        D = P.agent,
                        U = Object(b.d)(B, [], e.persistedMessages, R),
                        H = e.state,
                        z = B && B.length > 0 && B[B.length - 1].id || e.lastAgentEventId,
                        W = H === l.d.AGENT_WAITING && D && D.displayName ? l.d.AGENT_CONNECTED : H;
                    return Object(a.a)(Object(a.a)({}, L), {}, { messages: U, messagesPagination: R, state: W, lastAgentEventId: z });
                case d.T.FAILURE:
                case d.E.FAILURE:
                    return t.error && 404 === t.error.status ? Object(a.a)(Object(a.a)({}, e), v) : e;
                case d.W.SUCCESS:
                    var G = t.data.events.results,
                        q = Object(b.c)(G, e.messages, e.persistedMessages, t.data.events.pagination),
                        V = e.notifications;
                    return q && q.length && q.forEach(function(e) { return V = Object(f.a)(V, e) }), Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.e)(e.messages, q), notifications: V });
                case d.F.SUCCESS:
                    if (t.data.type === l.f.message && Object(b.a)(e.messages, t.data.id)) return e;
                    var Y = Object(f.d)(e.messages) || [];
                    return Object(a.a)(Object(a.a)({}, e), {}, { lastAgentEventId: t.data.id || e.lastAgentEventId, messages: [].concat(Object(r.a)(Y), [t.data]), ariaLiveMessage: Object(b.b)(t.data), messagesLastUpdatedAt: t.data.author && t.data.author.type === l.a.agent ? (new Date).toString() : e.messagesLastUpdated, notifications: Object(f.a)(e.notifications, t.data) });
                case d.G.SUCCESS:
                    var Q = t.data,
                        J = Q.pagination,
                        K = Q.results,
                        Z = void 0 === K ? [] : K,
                        X = Object(b.d)(Z, e.messages, e.persistedMessages, J);
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: X, messagesPagination: J });
                case d._25.SUCCESS:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.l)(e.messages, t.data.id, function(e) { return t.data }) });
                case d.A.REQUEST:
                    return Object(a.a)(Object(a.a)({}, e), {}, { previousState: e.state, state: l.d.ENDING });
                case d.A.SUCCESS:
                    var $ = e.previousState,
                        ee = $ === l.d.AGENT_WAITING ? l.c.WAITING_CUSTOMER : "";
                    return Object(a.a)(Object(a.a)({}, e), {}, { state: l.d.ENDED, chatEndReason: ee });
                case d.A.FAILURE:
                    return Object(a.a)(Object(a.a)({}, e), {}, { state: e.previousState || l.d.EMPTY });
                case d._37.REQUEST:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.j)(e.messages, t.payload.id, !0) });
                case d._37.SUCCESS:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.l)(e.messages, t.payload.id, function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { error: !1, isUploading: !1, url: t.payload.url }) }) });
                case d._38.SUCCESS:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.g)(e.messages, t.tempMessageId, t.message) });
                case d._38.FAILURE:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messages: Object(b.f)(e.messages, t.tempMessageId) });
                case d.C.REQUEST:
                    return Object(u.e)(e, "availableAgents");
                case d.C.SUCCESS:
                    var te = t.data.agents,
                        ne = Array.isArray(te) ? te : Object.values(te),
                        ae = Object(u.f)(e, "availableAgents", { data: ne, timestamp: new Date });
                    return Object(a.a)(Object(a.a)({}, ae), {}, { hasAvailableAgents: !!ne.length });
                case d.C.FAILURE:
                    return Object(u.d)(e, "availableAgents");
                case d._0:
                    return Object(a.a)(Object(a.a)({}, e), v);
                case d.q:
                case d._18:
                    return Object(a.a)(Object(a.a)({}, e), {}, { notifications: [] });
                case d.b:
                    return Object(a.a)(Object(a.a)({}, e), {}, { inputError: t.message });
                case d.m:
                    return Object(a.a)(Object(a.a)({}, e), {}, { inputError: void 0 });
                case d._4:
                    return Object(a.a)(Object(a.a)({}, e), {}, { messageId: t.messageId });
                default:
                    return e
            }
        },
        j = function(e) { return e.chat.timeoutId },
        y = function(e) { return e.chat && e.chat.id },
        _ = function(e) { return e.chat.envelope.data },
        A = Object(o.createSelector)(_, function(e) { return e ? e.customer : {} }),
        C = Object(o.createSelector)(_, function(e) { return e ? e.pusher : [] }),
        E = function(e) { return s()(e, "chat.messageId") },
        w = function(e) { return s()(e, "chat.state") },
        x = function(e) { return e.chat.hasAvailableAgents },
        S = function(e) { return e.chat.availableAgents },
        T = function(e) { return e.chat.inputError },
        k = function(e) { return e.chat.messages },
        I = function(e) { return e.chat.messagesPagination },
        M = Object(o.createSelector)(_, function(e) { return (e ? e.agent : void 0) || {} }),
        N = Object(o.createSelector)(M, function(e) { return !(!e || !e.displayName) }),
        L = function(e) { return w(e) === l.d.ENDING },
        P = function(e) { return w(e) === l.d.ENDED },
        F = function(e) { var t = w(e); return t === l.d.AGENT_WAITING || t === l.d.AGENT_DISCONNECTED },
        B = function(e) { var t = w(e); return t === l.d.AGENT_WAITING || t === l.d.AGENT_CONNECTED },
        R = function(e) { return e.chat.ariaLiveMessage },
        D = Object(o.createSelector)([k, h.x], function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object(f.b)(Object(f.c)(e), t)
        }),
        U = function(e) { return e.chat.chatEndReason },
        H = (Object(o.createSelector)([w], function(e) { return e.rating }), Object(o.createSelector)([k], function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return e && e.filter(function(e) { return e.author.type === m.a && !e.seenAt && e.type !== l.f.indicator }).length }));
    t.a = O
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return u }), n.d(t, "c", function() { return l }), n.d(t, "d", function() { return d }), n.d(t, "e", function() { return f });
    var a = n(5),
        r = n(122),
        i = (n.n(r), n(11)),
        o = n(26),
        c = { deviceId: Object(r.v4)(), header: "", jwt: "" },
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case i._36:
                case i.R:
                    var n = t.user,
                        s = n.signature,
                        u = n.email,
                        l = e.deviceId,
                        d = Object(o.b)(u, s, l);
                    return Object(a.a)(Object(a.a)({}, e), {}, { header: d });
                case i.M.SUCCESS:
                    return Object(a.a)(Object(a.a)({}, e), {}, { jwt: t.data.token });
                case i._0:
                    return Object(a.a)(Object(a.a)({}, e), {}, { jwt: "" });
                case i._2:
                    return Object(a.a)(Object(a.a)({}, e), {}, { deviceId: Object(r.v4)() });
                default:
                    return e
            }
        };
    t.a = s;
    var u = function(e) { return "Bearer ".concat(e.auth.jwt) },
        l = function(e) { return e.auth.deviceId },
        d = function(e) { return e.auth.header },
        f = function(e) { return e.auth.jwt }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return i }), n.d(t, "c", function() { return o });
    var a = n(308);
    n.d(t, "b", function() { return a.a });
    var r = function(e) { return !!navigator && navigator.userAgent.toLowerCase().indexOf(e) > -1 },
        i = function() { return r("trident") },
        o = function() { var e; return "undefined" !== typeof document.hidden ? e = "hidden" : "undefined" !== typeof document.msHidden ? e = "msHidden" : "undefined" !== typeof document.webkitHidden && (e = "webkitHidden"), !e || !document[e] }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return u }), n.d(t, "c", function() { return l }), n.d(t, "e", function() { return d }), n.d(t, "d", function() { return f });
    var a = n(5),
        r = n(28),
        i = n.n(r),
        o = n(11),
        c = { sessionData: null, synced: !1, syncPending: !1, conversationCount: void 0 },
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case o._16.FAILURE:
                    return Object(a.a)(Object(a.a)({}, e), {}, { synced: !1 });
                case o._16.SUCCESS:
                    var n = t.data,
                        r = void 0 === n ? {} : n,
                        i = r.status,
                        s = void 0 === i ? "NOT_CREATED" : i,
                        u = "NOT_CREATED" !== s;
                    return Object(a.a)(Object(a.a)({}, e), {}, { synced: u, syncPending: !1 });
                case o.J.SUCCESS:
                    var l = t.data,
                        d = l.paging,
                        f = d.count;
                    return Object(a.a)(Object(a.a)({}, e), {}, { conversationCount: f });
                case o.K.SUCCESS:
                    var b = t.count;
                    return Object(a.a)(Object(a.a)({}, e), {}, { conversationCount: b });
                case o.Q.SUCCESS:
                    var p = t.data.paging.count;
                    return Object(a.a)(Object(a.a)({}, e), {}, { conversationCount: p });
                case o.k:
                case o.U.SUCCESS:
                    var h = e.conversationCount,
                        m = void 0 === h ? 0 : h;
                    return Object(a.a)(Object(a.a)({}, e), {}, { conversationCount: t.isAnonymousChat ? m : m + 1 });
                case o.S:
                    return Object(a.a)(Object(a.a)({}, e), {}, { synced: !1, syncPending: !0 });
                case o._39:
                    var g = t.resetConversationCount;
                    return Object(a.a)(Object(a.a)({}, e), {}, { synced: !1, conversationCount: g ? void 0 : e.conversationCount });
                case o._1:
                    return Object(a.a)({}, c);
                case o._9:
                    return Object(a.a)(Object(a.a)({}, e), {}, { sessionData: t.data });
                default:
                    return e
            }
        };
    t.a = s;
    var u = function(e) { return i()(e, "stats.conversationCount") },
        l = function(e) { return i()(e, "stats.sessionData") },
        d = function(e) { return i()(e, "stats.synced") },
        f = function(e) { return i()(e, "stats.syncPending") }
}, , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "m", function() { return a }), n.d(t, "a", function() { return r }), n.d(t, "b", function() { return i }), n.d(t, "c", function() { return o }), n.d(t, "d", function() { return c }), n.d(t, "e", function() { return s }), n.d(t, "f", function() { return u }), n.d(t, "i", function() { return l }), n.d(t, "h", function() { return d }), n.d(t, "g", function() { return f }), n.d(t, "j", function() { return b }), n.d(t, "l", function() { return p }), n.d(t, "k", function() { return h }), n.d(t, "o", function() { return m }), n.d(t, "n", function() { return g }), n.d(t, "p", function() { return v });
    var a = "/",
        r = "/answers",
        i = "".concat(r, "/article"),
        o = "/ask",
        c = "".concat(o, "/chat"),
        s = "".concat(c, "/article"),
        u = "".concat(o, "/message"),
        l = "".concat(u, "/custom-fields"),
        d = "".concat(u, "/contact-form"),
        f = "".concat(u, "/confirmation"),
        b = "/docs",
        p = "".concat(b, "/search"),
        h = "".concat(b, "/article"),
        m = "/previous-messages",
        g = "".concat(m, "/conversation"),
        v = "/redirect"
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "f", function() { return r }), n.d(t, "d", function() { return i }), n.d(t, "c", function() { return o }), n.d(t, "b", function() { return c }), n.d(t, "g", function() { return s }), n.d(t, "e", function() { return u });
    var a = { agent: "agent", customer: "customer", system: "system" },
        r = { action: "action", attachment: "attachment", indicator: "indicator", image: "image", message: "message" },
        i = { EMPTY: "CHAT_STATE_EMPTY", ENDED: "CHAT_STATE_ENDED", ENDING: "CHAT_STATE_ENDING", BOT_PROMPT_SUBJECT: "CHAT_STATE_BOT_PROMPT_SUBJECT", BOT_PROMPT_EMAIL: "CHAT_STATE_BOT_PROMPT_EMAIL", CREATING_ENVELOPE: "CHAT_STATE_CREATING_ENVELOPE", AGENT_WAITING: "CHAT_STATE_AGENT_WAITING", AGENT_CONNECTED: "CHAT_STATE_AGENT_CONNECTED", AGENT_DISCONNECTED: "CHAT_STATE_AGENT_DISCONNECTED" },
        o = { ENDED: "chat-ended", SPAM: "chat-ended-spam", INACTIVE: "chat-ended-inactive", UNASSIGNED: "chat-ended-unassigned", WAITING_CUSTOMER: "chat-ended-by-waiting-customer" },
        c = { BOT_TYPING_START: "bot:typing:start", BOT_TYPING_END: "bot:typing:end", BOT_MESSAGE: "bot:message", USER_ANSWER_SUBJECT: "user:answer:subject", USER_ANSWER_EMAIL: "user:answer:email", USER_INACTIVE: "user:inactive" },
        s = 2200,
        u = 1
}, function(e, t, n) {
    "use strict";
    n.d(t, "m", function() { return d }), n.d(t, "i", function() { return O }), n.d(t, "j", function() { return j }), n.d(t, "l", function() { return y }), n.d(t, "k", function() { return _ }), n.d(t, "b", function() { return A }), n.d(t, "c", function() { return C }), n.d(t, "f", function() { return E }), n.d(t, "e", function() { return w }), n.d(t, "d", function() { return x }), n.d(t, "g", function() { return S }), n.d(t, "h", function() { return T });
    var a = n(5),
        r = n(28),
        i = n.n(r),
        o = n(98),
        c = n.n(o),
        s = n(30),
        u = n(11),
        l = n(48),
        d = { article: Object(s.c)(), beaconIsOpened: !1, openedArticles: [], searchQuery: "", searchResults: Object(s.c)(), suggestions: Object(s.c)() },
        f = function(e) { var t = e.payload; return t && !0 === t.isChild },
        b = function(e, t) { return e.reverse().find(function(e) { return e.id === t }) },
        p = function(e) { return e && e.length > 0 || !1 },
        h = function(e, t) { var n = e.slice(); return n[n.length - 1] = Object(a.a)(Object(a.a)({}, n[n.length - 1]), t), n },
        m = function(e, t, n) { return e.map(function(e) { return e.id === t ? Object(a.a)(Object(a.a)({}, e), n) : e }) || [] },
        g = function(e, t, n) { return e.id === t ? Object(a.a)(Object(a.a)({}, e), n) : e },
        v = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case u._6:
                    return Object(a.a)(Object(a.a)({}, e), {}, { deferred: t.payload });
                case u.h:
                    return Object(a.a)(Object(a.a)({}, e), {}, { deferred: {} });
                case u.O.REQUEST:
                    return Object(s.f)(e, "suggestions");
                case u.O.SUCCESS:
                    return Object(s.g)(e, "suggestions", { data: t.data.items, payload: t.payload });
                case u.O.FAILURE:
                    return Object(s.e)(e, "suggestions");
                case u.y:
                    var n = Object(a.a)({}, e),
                        r = t.demo.smartSuggestions;
                    return r && (n = Object(s.g)(n, "suggestions", { data: r })), n;
                case u.B.REQUEST:
                    if (f(t)) {
                        var i = e.openedArticles.slice(),
                            o = i.length,
                            c = b(e.openedArticles, t.payload.id);
                        return c && !0 === c.isError && (o = c.index), i[o] = { id: t.payload.id, index: o, isLoading: !0, isError: !1 }, Object(a.a)(Object(a.a)({}, e), {}, { openedArticles: i })
                    }
                    return Object(s.f)(e, "article");
                case u.u:
                    var l = e.openedArticles.slice(0, -1);
                    return Object(a.a)(Object(a.a)({}, e), {}, { openedArticles: l });
                case u.t:
                    return Object(a.a)(Object(a.a)({}, e), {}, { article: d.article, openedArticles: [] });
                case u.B.SUCCESS:
                    if (f(t)) {
                        var v = e.openedArticles.slice(),
                            O = b(e.openedArticles, t.data.id);
                        return v[O.index] = Object(a.a)(Object(a.a)(Object(a.a)({}, O), t.data), {}, { isLoading: !1, isError: !1 }), Object(a.a)(Object(a.a)({}, e), {}, { openedArticles: v })
                    }
                    return Object(s.g)(e, "article", { data: t.data, payload: t.payload, timestamp: new Date });
                case u.B.FAILURE:
                    if (f(t)) {
                        var j = e.openedArticles.slice(),
                            y = b(e.openedArticles, t.payload.id);
                        return j[y.index] = Object(a.a)(Object(a.a)(Object(a.a)({}, y), t.data), {}, { isLoading: !1, isError: !0 }), Object(a.a)(Object(a.a)({}, e), {}, { openedArticles: j })
                    }
                    return Object(s.e)(e, "article");
                case u.N.REQUEST:
                    return Object(a.a)(Object(a.a)({}, e), {}, { searchQuery: t.payload.query, searchResults: Object(a.a)(Object(a.a)({}, e.searchResults), {}, { isLoading: !0, isError: !1 }) });
                case u.N.SUCCESS:
                    return Object(s.g)(e, "searchResults", { data: t.data.items, payload: t.payload });
                case u.N.FAILURE:
                    return Object(s.e)(e, "searchResults");
                case u._13.REQUEST:
                    var _ = t.payload.id;
                    return p(e.openedArticles) ? Object(a.a)(Object(a.a)({}, e), {}, { openedArticles: h(e.openedArticles, { isFeedbackLoading: !0 }) }) : Object(a.a)(Object(a.a)({}, e), {}, { article: { data: g(e.article.data, _, { isFeedbackLoading: !0 }) } });
                case u._13.FAILURE:
                    var A = t.payload.id;
                    return p(e.openedArticles) ? Object(a.a)(Object(a.a)({}, e), {}, { openedArticles: h(e.openedArticles, { isFeedbackLoading: !1 }) }) : Object(a.a)(Object(a.a)({}, e), {}, { article: { data: g(e.article.data, A, { isFeedbackLoading: !1 }) } });
                case u._13.SUCCESS:
                    var C = t.payload,
                        E = C.id,
                        w = C.rating;
                    return Object(a.a)(Object(a.a)({}, e), {}, { article: { data: g(e.article.data, E, { rating: w, isFeedbackLoading: !1 }) }, openedArticles: m(e.openedArticles, E, { rating: w, isFeedbackLoading: !1 }) });
                case u._18:
                    return Object(a.a)(Object(a.a)({}, e), {}, { beaconIsOpened: t.isOpened });
                default:
                    return e
            }
        },
        O = function(e) { return i()(e, "docs.suggestions") },
        j = function(e) { return i()(e, "docs.suggestions.data") },
        y = function(e) { return e.docs.deferred && "function" === typeof e.docs.deferred.fn },
        _ = function(e) { return e.docs.deferred },
        A = function(e) { return i()(e, "docs.article") },
        C = function(e) { var t = A(e); return t && t.data && t.data.id },
        E = function(e) { return i()(e, "docs.openedArticles") },
        w = function(e) {
            var t = i()(e, "router.location"),
                n = t && t.pathname;
            return !(!n || !n.includes(l.d))
        },
        x = function(e) {
            var t = e.router.location,
                n = e.docs.searchQuery,
                r = t.state && t.state.query ? { query: encodeURIComponent(t.state.query) } : c.a.parse(t.search);
            return "undefined" === typeof r.query && (r.query = encodeURIComponent(n)), Object(a.a)(Object(a.a)({}, r), {}, { query: decodeURIComponent(r.query) })
        },
        S = function(e) { return x(e).query },
        T = function(e) { return i()(e, "docs.searchResults") };
    t.a = v
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return p }), n.d(t, "c", function() { return h }), n.d(t, "e", function() { return m }), n.d(t, "g", function() { return g }), n.d(t, "f", function() { return v }), n.d(t, "h", function() { return O }), n.d(t, "d", function() { return j }), n.d(t, "i", function() { return y }), n.d(t, "k", function() { return _ }), n.d(t, "j", function() { return A });
    var a = n(22),
        r = n(5),
        i = n(28),
        o = n.n(i),
        c = n(11),
        s = n(154),
        u = n(12),
        l = { activeMessageId: "", activeMessageConfig: null, eventBasedConditionsState: { pageWasScrolled: !1, timeOnPagePassed: !1 }, previewMessage: null, shownMessages: [], staticConditionsState: { pageViews: 1, repeatPageViews: [{ url: Object(s.a)(), count: 1 }] }, syncedCustomerHash: null, lastSyncTimestamp: null, timeOnPageTimeoutId: null, unshownAPIMessages: [] },
        d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case c._3:
                    var n = t.messageId,
                        i = t.config,
                        o = e.shownMessages,
                        s = i && !0 === i.force;
                    return -1 !== o.indexOf(n) ? s ? Object(r.a)(Object(r.a)({}, e), {}, { activeMessageId: n, activeMessageConfig: i }) : e : Object(r.a)(Object(r.a)({}, e), {}, { activeMessageId: n, activeMessageConfig: i, shownMessages: [].concat(Object(a.a)(o), [n]) });
                case c._8:
                    return Object(r.a)(Object(r.a)({}, e), {}, { previewMessage: t.data });
                case c.l:
                case c._18:
                    return Object(r.a)(Object(r.a)({}, e), {}, { activeMessageId: "" });
                case c._29:
                    return Object(r.a)(Object(r.a)({}, e), {}, { eventBasedConditionsState: Object(r.a)(Object(r.a)({}, e.eventBasedConditionsState), t.payload) });
                case c._10:
                    return Object(r.a)(Object(r.a)({}, e), {}, { syncedCustomerHash: t.data, lastSyncTimestamp: t.timestamp });
                case c._11:
                    return Object(r.a)(Object(r.a)({}, e), {}, { timeOnPageTimeoutId: t.timeoutId });
                case c._12:
                    return Object(r.a)(Object(r.a)({}, e), {}, { unshownAPIMessages: t.payload });
                default:
                    return e
            }
        };
    t.a = d;
    var f = function(e) { return o()(e, "messages.activeMessageId") },
        b = function(e) { return o()(e, "messages.activeMessageConfig") },
        p = function(e) {
            var t = f(e),
                n = b(e);
            if (t) { var a = Object(u.y)(e, t); return n && (a = Object(r.a)(Object(r.a)({}, a), n)), a }
            return null
        },
        h = function(e) { return o()(e, "messages.eventBasedConditionsState") },
        m = function(e) { return o()(e, "messages.previewMessage") },
        g = function(e) { return o()(e, "messages.staticConditionsState") },
        v = function(e) { return o()(e, "messages.shownMessages") },
        O = function(e) { return o()(e, "messages.syncedCustomerHash") },
        j = function(e) { return o()(e, "messages.lastSyncTimestamp") },
        y = function(e) { return o()(e, "messages.timeOnPageTimeoutId") },
        _ = function(e) {
            var t = Object(u.A)(e),
                n = v(e);
            return !(!t || !n) && t.filter(function(e) { return -1 === n.indexOf(e.id) })
        },
        A = function(e) { return o()(e, "messages.unshownAPIMessages") }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return w }), n.d(t, "a", function() { return x }), n.d(t, "f", function() { return S }), n.d(t, "j", function() { return T }), n.d(t, "C", function() { return k }), n.d(t, "w", function() { return L }), n.d(t, "x", function() { return P }), n.d(t, "B", function() { return F }), n.d(t, "p", function() { return B }), n.d(t, "i", function() { return R }), n.d(t, "m", function() { return D }), n.d(t, "n", function() { return U }), n.d(t, "o", function() { return H }), n.d(t, "y", function() { return z }), n.d(t, "k", function() { return W }), n.d(t, "t", function() { return G }), n.d(t, "A", function() { return q }), n.d(t, "l", function() { return V }), n.d(t, "h", function() { return Y }), n.d(t, "g", function() { return Q }), n.d(t, "z", function() { return J }), n.d(t, "d", function() { return K }), n.d(t, "e", function() { return Z }), n.d(t, "r", function() { return X }), n.d(t, "c", function() { return $ }), n.d(t, "s", function() { return ee }), n.d(t, "q", function() { return te }), n.d(t, "u", function() { return ne }), n.d(t, "v", function() { return ae });
    var a = n(22),
        r = n(5),
        i = n(122),
        o = (n.n(i), n(98)),
        c = (n.n(o), n(31)),
        s = n(37),
        u = n(11),
        l = n(474),
        d = n(49),
        f = n(48),
        b = n(30),
        p = n(12),
        h = n(36),
        m = n(35),
        g = n(41),
        v = n(135),
        O = n(26),
        j = n(475),
        y = n(61),
        _ = n(220),
        A = function(e) { return { response: { success: function(e) { return e }, failure: function(t) { return t && t.response && (403 === t.response.status || 404 === t.response.status) ? (e(G()), e(C())) : Promise.reject(t) } } } },
        C = function() { return Object(s.b)(f.m) },
        E = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.messageBody,
                n = e.messageId;
            return { author: { id: d.e, type: d.a.customer }, avatar: void 0, rawBody: t || "", id: n || Object(i.v4)(), to: !0, type: d.f.message }
        },
        w = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.persist;
            return { type: u.c, payload: { message: "string" === typeof e ? E({ messageBody: e }) : e }, persist: n }
        },
        x = function(e) { return { type: u.b, message: e } },
        S = function() { return { type: u.m } },
        T = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return function(n, a) {
                var r = a(),
                    o = Object(i.v4)(),
                    s = Object(m.h)(r),
                    l = Object(h.c)(r),
                    d = Object(h.b)(r),
                    f = E({ messageBody: e, messageId: o });
                return n(w(f)), Object(b.b)(n, { deviceId: l, header: d, method: "put", url: "".concat(c.c, "/v1/chats/").concat(s, "/messages/").concat(o), actions: u.x, payload: { attachments: t, body: e, id: o }, interceptors: A(n) })
            }
        },
        k = function(e) {
            var t = e.file,
                n = e.type,
                a = e.result,
                o = e.fileProps;
            return function(e, c) {
                var s = c(),
                    u = Object(m.h)(s),
                    f = Object(h.c)(s),
                    b = Object(h.b)(s),
                    p = {};
                if (n === l.a.image) {
                    var g = a,
                        v = t.name;
                    p = Object(r.a)(Object(r.a)({}, o), {}, { type: d.f.image, imageUrl: g, caption: v })
                } else {
                    var O = t.name;
                    p = { type: d.f.attachment, filename: O }
                }
                var y = Object(i.v4)(),
                    _ = Object(r.a)(Object(r.a)({}, E({ messageId: y })), p);
                e(w(_)), e(I(y, t.name)), Object(j.a)(u, t, f, b).then(function(t) { return e(M(y, t)) }).catch(function(t) { return e(N(y, t)) })
            }
        },
        I = function(e, t) { return { type: u._38.REQUEST, tempMessageId: e, fileName: t } },
        M = function(e, t) { return { type: u._38.SUCCESS, tempMessageId: e, message: t } },
        N = function(e, t) { return { type: u._38.FAILURE, tempMessageId: e, error: t } },
        L = function(e) { return { type: u._21, agent: e } },
        P = function(e) { return { type: u._24, payload: e } },
        F = function(e) { return { type: u._32, messageBody: e } },
        B = function() {
            return function(e, t) {
                var n = t(),
                    a = Object(h.d)(n),
                    r = Object(p.d)(n),
                    i = Object(h.c)(n),
                    s = Object(p.I)(n),
                    l = Object(O.e)(n),
                    d = l.name,
                    f = l.email,
                    m = l.identified,
                    g = function(e) { return e || f && m ? "".concat(c.a, "/v1/").concat(r, "/chat/token?").concat(Object(o.stringify)({ name: d, deviceId: i })) : "".concat(c.a, "/v1/").concat(r, "/chat/anonymous/token?deviceId=").concat(i) }(s);
                return Object(b.b)(e, { actions: u.M, url: g, deviceId: i, header: a })
            }
        },
        R = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.subject,
                n = void 0 === t ? "" : t,
                r = e.customFields,
                o = void 0 === r ? [] : r;
            return function(e, t, r) {
                function s() {
                    var r = t(),
                        i = Object(h.c)(r),
                        s = Object(m.n)(r),
                        f = Object(h.b)(r),
                        p = Object(a.a)(Object(v.c)(r)),
                        j = Object(g.c)(r),
                        _ = Object(O.e)(r),
                        C = _.name,
                        E = _.email,
                        w = window.location.href,
                        x = document.title;
                    return p.push({ type: y.c, timestamp: new Date, url: w || "Unknown URL", title: x || "Untitled Page" }), l && l.emit(y.c, { name: C, email: E, subject: n }), Object(b.b)(e, { deviceId: i, header: f, method: "put", url: "".concat(c.c, "/v1/chats/").concat(d), actions: u.w, payload: { sessionAttributes: j, subject: n, timeline: p, customFields: o, messageId: s }, interceptors: A(e) })
                }
                var l = r.events,
                    d = Object(i.v4)();
                return Object(h.e)(t()) ? s() : e(B()).then(s)
            }
        },
        D = function(e) {
            return function(t, n) {
                var a = Object(h.c)(n()),
                    r = Object(h.b)(n());
                return Object(b.b)(t, { deviceId: a, header: r, url: "".concat(c.c, "/v1/chats/").concat(e), actions: u.E, interceptors: A(t) }).then(function() { t(ee()) })
            }
        },
        U = function(e) {
            var t = e.eventId,
                n = e.chatId;
            return function(e, a) {
                var r = a(),
                    i = n || Object(m.h)(r),
                    o = Object(h.c)(r),
                    s = Object(h.b)(r),
                    l = Object(m.o)(r);
                return Object(_.a)(l, t) ? Promise.resolve() : Object(b.b)(e, { deviceId: o, header: s, url: "".concat(c.c, "/v1/chats/").concat(i, "/events/").concat(t), actions: u.F, interceptors: A(e) }).then(function() { e(ee()) })
            }
        },
        H = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { page: 1 },
                t = e.page,
                n = arguments.length > 1 ? arguments[1] : void 0;
            return function(e, a) {
                var r = a(),
                    i = Object(m.h)(r),
                    o = Object(h.c)(r),
                    s = Object(h.b)(r);
                return Object(b.b)(e, { deviceId: o, header: s, url: "".concat(c.c, "/v1/chats/").concat(i, "/events?page=").concat(t), actions: u.G, cancelToken: n })
            }
        },
        z = function(e) {
            var t = e.eventId,
                n = e.chatId;
            return function(e, a) {
                var r = a(),
                    i = n || Object(m.h)(r),
                    o = Object(h.c)(r),
                    s = Object(h.b)(r);
                return Object(b.b)(e, { deviceId: o, header: s, url: "".concat(c.c, "/v1/chats/").concat(i, "/events/").concat(t), actions: u._25, interceptors: A(e) })
            }
        },
        W = function() {
            return function(e, t) {
                var n = t(),
                    a = Object(m.h)(n),
                    r = Object(h.c)(n),
                    i = Object(h.b)(n);
                return Object(b.b)(e, { deviceId: r, header: i, method: "put", url: "".concat(c.c, "/v1/chats/").concat(a, "/leave"), actions: u.A, interceptors: A(e) })
            }
        },
        G = function() { return { type: u._0 } },
        q = function(e) {
            var t = e.isTyping,
                n = e.timeoutId,
                a = e.agent;
            return function(e, r) {
                var i = Object(m.t)(r());
                i && clearTimeout(i), e({ type: u._30, isTyping: t, timeoutId: n, agent: a })
            }
        },
        V = function(e, t, n) {
            return function(t, a) {
                var r = a(),
                    i = e || Object(p.d)(r),
                    s = Object(h.c)(r);
                return i === p.F.beaconId ? new Promise(function(e) { return e() }).then(function() { return t({ type: u.C.SUCCESS, data: { agents: [] } }) }) : Object(b.b)(t, { deviceId: s, actions: u.C, url: "".concat(c.c, "/v2/beacon/").concat(i, "/agents?").concat(Object(o.stringify)({ deviceId: s })), cancelToken: n }).catch(function() { t({ type: u.C.SUCCESS, data: { agents: [] } }) })
            }
        },
        Y = function() {
            return function(e, t) {
                var n = t();
                if (!Object(m.j)(n)) {
                    var a = Object(m.h)(n),
                        r = Object(h.c)(n),
                        i = Object(h.b)(n);
                    return Object(b.b)(e, { deviceId: r, header: i, method: "put", url: "".concat(c.c, "/v1/chats/").concat(a, "/beacon-closed"), actions: u.v, interceptors: A(e) })
                }
            }
        },
        Q = function() { return { type: u.q } },
        J = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.id,
                n = e.height,
                a = e.width;
            return { type: u._26, payload: { id: t, height: n, width: a } }
        },
        K = function() { return { type: u.i } },
        Z = function() { return { type: u.j } },
        X = function() { return { type: u.g } },
        $ = function(e) { return { type: u.k, isAnonymousChat: e } },
        ee = function() {
            return function(e, t) {
                var n = t(),
                    a = n.chat,
                    r = a.id,
                    i = a.lastAgentEventId,
                    o = n.status.isOpened,
                    s = Object(h.c)(n),
                    l = Object(h.b)(n),
                    d = Object(m.u)(n);
                if (r && 0 !== d && i && o) return Object(b.b)(e, { deviceId: s, header: l, method: "put", url: "".concat(c.c, "/v1/chats/").concat(r, "/messages/").concat(i, "/seen"), actions: u.T, interceptors: A(e) })
            }
        },
        te = function() { return function(e, t, n) { return n.chatBot } },
        ne = function(e) { return { type: u._4, messageId: e } },
        ae = function(e) {
            var t = e.comments,
                n = e.rating;
            return function(e, a) {
                var r = a(),
                    i = Object(m.h)(r),
                    o = Object(h.c)(r),
                    s = Object(h.b)(r);
                return Object(b.b)(e, { deviceId: o, header: s, method: "put", payload: { comments: t, code: parseInt(n, 10) }, url: "".concat(c.c, "/v1/chats/").concat(i, "/rating"), actions: u._5, interceptors: A(e) })
            }
        }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "h", function() { return o }), n.d(t, "a", function() { return c }), n.d(t, "b", function() { return s }), n.d(t, "g", function() { return u }), n.d(t, "e", function() { return l }), n.d(t, "c", function() { return d }), n.d(t, "d", function() { return f }), n.d(t, "f", function() { return b });
    var a = n(11),
        r = n(61),
        i = function(e, t, n) { return { type: a._17, event: { type: e, timestamp: new Date, url: t || "Unknown URL", title: n || "Untitled Page" } } },
        o = function(e) {
            var t = e.query,
                n = e.url;
            return { type: a._17, event: { type: r.j, timestamp: new Date, query: t || "(empty search)", url: n || "Unknown URL" } }
        },
        c = function(e) {
            var t = e.url,
                n = e.title,
                i = e.name;
            return { type: a._17, event: { type: r.b, timestamp: new Date, url: t || "Unknown URL", title: n || "Untitled Page", name: i || "Unknown Beacon" } }
        },
        s = function(e) {
            var t = e.name,
                n = e.subject,
                i = e.message;
            return { type: a._17, event: { type: r.d, timestamp: new Date, name: t, subject: n, message: i } }
        },
        u = function(e) { var t = e.conversationId; return { type: a._17, event: { type: r.i, timestamp: new Date, conversationId: t } } },
        l = function(e) {
            var t = e.url,
                n = e.title,
                i = e.messageId,
                o = e.messageName;
            return function(e, c, s) {
                var u = s.events;
                u && u.emit(r.g, { id: i }), e({ type: a._17, event: { type: r.g, timestamp: new Date, url: t || "Unknown URL", title: n || "Untitled Page", messageName: o || "Unknown Message" } })
            }
        },
        d = function(e) {
            var t = e.messageId,
                n = e.messageName;
            return function(e, i, o) {
                var c = o.events;
                c && c.emit(r.e, { id: t }), e({ type: a._17, event: { type: r.e, timestamp: new Date, messageName: n || "Unknown Message" } })
            }
        },
        f = function(e) {
            var t = e.messageId;
            e.messageName;
            return function(e, n, a) {
                var i = a.events;
                i && i.emit(r.f, { id: t })
            }
        },
        b = function(e) {
            var t = e.url,
                n = e.title;
            return i(r.h, t, n)
        }
}, function(e, t, n) {
    "use strict";

    function a(e) { return Array.prototype.toJSON && (i = Array.prototype.toJSON, delete Array.prototype.toJSON), e }

    function r(e) { return i && (Array.prototype.toJSON = i), e }
    var i, o = n(22),
        c = n(66),
        s = n.n(c),
        u = n(122);
    n.n(u);
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.deviceId,
            n = e.extraHeader,
            i = e.header,
            c = e.noCache,
            l = e.withCredentials,
            d = { correlationId: Object(u.v4)(), "Helpscout-Origin": "Beacon-Embed", "Helpscout-Release": "2.1.90" };
        t && Object.assign(d, { "Beacon-Device-ID": t }), i && Object.assign(d, { Authorization: i }), !0 === c && Object.assign(d, { "Cache-Control": "no-cache", "HS-Beacon-No-Cache": "true" }), n && Object.assign(d, n);
        var f = [a].concat(Object(o.a)(s.a.defaults.transformRequest), [r]);
        return s.a.create({ headers: d, withCredentials: l, transformRequest: f })
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return a }), n.d(t, "j", function() { return r }), n.d(t, "a", function() { return i }), n.d(t, "d", function() { return o }), n.d(t, "i", function() { return c }), n.d(t, "h", function() { return s }), n.d(t, "c", function() { return u }), n.d(t, "e", function() { return l }), n.d(t, "f", function() { return d }), n.d(t, "g", function() { return f });
    var a = "beacon-opened",
        r = "search",
        i = "article-viewed",
        o = "email-sent",
        c = "reply-sent",
        s = "page-viewed",
        u = "chat-started",
        l = "message-clicked",
        d = "message-closed",
        f = "message-triggered"
}, function(e, t, n) {
    "use strict";
    n.d(t, "g", function() { return a }), n.d(t, "e", function() { return r }), n.d(t, "f", function() { return i }), n.d(t, "b", function() { return o }), n.d(t, "a", function() { return c }), n.d(t, "d", function() { return s }), n.d(t, "c", function() { return u });
    var a = "text",
        r = "iconAndText",
        i = "manual",
        o = 60,
        c = 56,
        s = 35,
        u = 55
}, , function(e, t, n) {
    "use strict";
    n.d(t, "f", function() { return f }), n.d(t, "a", function() { return b }), n.d(t, "g", function() { return p }), n.d(t, "b", function() { return h }), n.d(t, "h", function() { return g }), n.d(t, "i", function() { return O }), n.d(t, "e", function() { return j }), n.d(t, "d", function() { return y }), n.d(t, "c", function() { return _ });
    var a = n(5),
        r = n(31),
        i = n(11),
        o = n(36),
        c = n(12),
        s = n(54),
        u = n(26),
        l = n(60),
        d = n(709),
        f = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return { type: i._3, messageId: e, config: t } },
        b = function() { return { type: i.l } },
        p = function(e) { return { type: i._8, data: e } },
        h = function(e) { return { type: i._8, data: null } },
        m = function(e, t) { return { type: i._10, data: e, timestamp: t } },
        g = function(e) { return { type: i._11, timeoutId: e } },
        v = function(e) { return { type: i._12, payload: e } },
        O = function(e) { return { type: i._29, payload: e } },
        j = function(e) {
            var t = e.messageId,
                n = e.type,
                a = e.conversationType;
            return function(e, i) {
                var s = Object(c.d)(i()),
                    u = Object(o.c)(i()),
                    d = Object(o.d)(i()),
                    f = "".concat(r.a, "/v1/").concat(s, "/messages/").concat(t, "/events"),
                    b = { deviceId: u, timestamp: new Date, type: n };
                return a && (b.conversationType = a), Object(l.a)({ deviceId: u, header: d }).post(f, b)
            }
        },
        y = function() {
            return function(e, t) {
                var n = t(),
                    i = Object(u.c)(n),
                    f = Object(u.e)(n),
                    b = Object(o.d)(n),
                    p = Object(o.c)(n),
                    h = Object(c.d)(n),
                    g = Object(u.d)(n),
                    v = { "Beacon-Route": "Events" },
                    O = "".concat(r.a, "/v1/").concat(h, "/customers");
                if (!g) return Promise.resolve();
                var j = Object(a.a)(Object(a.a)({}, i), {}, { email: f.email }),
                    y = Date.now(),
                    _ = Object(s.h)(n),
                    A = Object(d.a)(j),
                    C = Object(s.d)(n);
                return function() { return C && C + 864e5 > y }() && _ === A ? Promise.resolve() : Object(l.a)({ deviceId: p, extraHeader: v, header: b }).put(O, i).then(function(t) { t.data; return e(m(A, y)) }).catch(function(e) { return console.error("Error syncing customer information", e) })
            }
        },
        _ = function() {
            return function(e, t) {
                var n = t(),
                    a = Object(c.d)(n),
                    i = Object(o.c)(n),
                    s = Object(o.d)(n),
                    u = "".concat(r.a, "/v1/").concat(a, "/messages?deviceId=").concat(i);
                return Object(l.a)({ deviceId: i, header: s }).get(u).then(function(t) { var n = t.data; return e(v(n.messages)) }).catch(function(e) { return console.error("Error fetching Messages", e) })
            }
        }
}, function(e, t, n) {
    "use strict";
    var a, r = n(17),
        i = n(524),
        o = n(88),
        c = n(71),
        s = function(e) { return {} },
        u = { trackCloseModal: o.e, trackOpenModal: o.f };
    a = Object(c.c)() ? i.a : Object(r.b)(s, u)(i.a), t.a = a
}, , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "b", function() { return a }), n.d(t, "c", function() { return i }), n.d(t, "a", function() { return o });
        var a = function(t) { return !!t && (e && Object({ NODE_ENV: "production", PUBLIC_URL: "https://beacon-v2.helpscout.net", BEACON_ENV: "production", BEACON_ID: "76d05357-bd7a-4019-b47b-d248d33b15b7", BEACON_VERSION: "2.1.90", IS_DOCKER: !1, BOI: void 0, BRANCH: "", DEPLOY_URL: "", DEPLOY_PRIME_URL: "", SC_ATTR: "hs-beacon" }) && "production" === t) },
            r = function(t) { return !!t && (e && Object({ NODE_ENV: "production", PUBLIC_URL: "https://beacon-v2.helpscout.net", BEACON_ENV: "production", BEACON_ID: "76d05357-bd7a-4019-b47b-d248d33b15b7", BEACON_VERSION: "2.1.90", IS_DOCKER: !1, BOI: void 0, BRANCH: "", DEPLOY_URL: "", DEPLOY_PRIME_URL: "", SC_ATTR: "hs-beacon" }) && "production" === t) },
            i = function() { return a("test") || r("test") },
            o = function() { return a("development") || r("development") }
    }).call(t, n(130))
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return b }), n.d(t, "a", function() { return p }), n.d(t, "c", function() { return h });
    var a = n(11),
        r = n(75),
        i = n(31),
        o = n(12),
        c = n(36),
        s = n(90),
        u = n(41),
        l = n(26),
        d = n(298),
        f = function() { return { type: a.S } },
        b = function() {
            return function(e, t) {
                var n = Object(l.e)(t()),
                    a = n.email,
                    r = Object(u.b)(t());
                if (a && !r) return e(Object(d.d)())
            }
        },
        p = function() {
            return function(e, t) {
                var n = t(),
                    a = Object(s.f)(n),
                    r = Object(u.d)(n);
                if (Object(l.f)(n)) return a && !r ? (e(f()), e(h())) : e(f())
            }
        },
        h = function() {
            return function(e, t) {
                var n = Object(l.c)(t()),
                    s = Object(c.d)(t()),
                    u = Object(c.c)(t()),
                    d = Object(o.d)(t());
                return Object(r.b)(e, { header: s, deviceId: u, method: "put", actions: a._16, url: "".concat(i.a, "/v1/").concat(d, "/customers"), payload: n })
            }
        }
}, , , function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.instance,
            n = e.method,
            a = e.url,
            r = e.payload,
            i = e.cancelToken;
        switch (n) {
            case "post":
                return t.post(a, r, { cancelToken: i });
            case "put":
                return t.put(a, r, { cancelToken: i });
            case "get":
            default:
                return t.get(a, { cancelToken: i })
        }
    }

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t.request && t.request.success && t.request.failure && e.interceptors.request.use(t.request.success, t.request.failure), t.response && t.response.success && t.response.failure && e.interceptors.response.use(t.response.success, t.response.failure)
    }
    n.d(t, "b", function() { return b }), n.d(t, "c", function() { return p }), n.d(t, "g", function() { return h }), n.d(t, "e", function() { return m }), n.d(t, "f", function() { return g }), n.d(t, "d", function() { return v }), n.d(t, "a", function() { return O });
    var i = n(5),
        o = n(66),
        c = n.n(o),
        s = n(116),
        u = n.n(s),
        l = n(16),
        d = n(60),
        f = n(71),
        b = function(e, t) {
            var n = t.actions,
                i = t.url,
                o = t.callWithDelay,
                s = t.cancelToken,
                u = t.payload,
                b = t.header,
                p = t.deviceId,
                h = t.method,
                m = t.noCache,
                g = t.withCredentials,
                v = t.interceptors,
                O = t.extraHeader;
            e({ type: n.REQUEST, payload: u });
            var j = Object(d.a)({ deviceId: p, extraHeader: O, header: b, noCache: m, withCredentials: g });
            return r(j, v), a({ instance: j, method: h, url: i, payload: u, cancelToken: s }).then(function(t) {
                if (t) {
                    var a = t.data,
                        r = function() { return e({ type: n.SUCCESS, data: a, payload: u }) };
                    return o ? o(r) : r()
                }
            }).catch(function(t) {
                var a = !Object(f.c)();
                if (!c.a.isCancel(t)) {
                    a && l.a.log("Error fetching ".concat(i), t);
                    var r = t.response,
                        s = void 0 === r ? {} : r,
                        d = s.status,
                        b = s.statusText,
                        p = s.data,
                        h = function() { throw e({ type: n.FAILURE, error: { status: d, statusText: b, data: p }, payload: u }), t };
                    return o ? o(h) : h()
                }
                a && l.a.log("Request canceled", t.message)
            })
        },
        p = function() { return { data: null, payload: null, isLoading: !1, isError: !1 } },
        h = function(e) { return u()(e, p()) },
        m = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.data,
                r = n.payload,
                o = n.isLoading,
                c = void 0 === o || o,
                s = {};
            return s[t] = { data: a || null, payload: r || null, isLoading: c, isError: !1 }, Object(i.a)(Object(i.a)({}, e), s)
        },
        g = function(e, t, n) {
            var a = n.data,
                r = n.payload,
                o = n.timestamp,
                c = {};
            return c[t] = { data: a, payload: r || null, isLoading: !1, isError: !1 }, o && (c[t].timestamp = o), Object(i.a)(Object(i.a)({}, e), c)
        },
        v = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.data,
                r = n.payload,
                o = {};
            return o[t] = { data: a || null, payload: r || null, isLoading: !1, isError: !0 }, Object(i.a)(Object(i.a)({}, e), o)
        },
        O = function(e) { return { REQUEST: "".concat(e, "_REQUEST"), SUCCESS: "".concat(e, "_SUCCESS"), FAILURE: "".concat(e, "_FAILURE") } }
}, function(e, t, n) {
    "use strict";
    var a = n(492);
    t.a = a.a
}, , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return f }), n.d(t, "d", function() { return m }), n.d(t, "e", function() { return g }), n.d(t, "f", function() { return v }), n.d(t, "g", function() { return O }), n.d(t, "c", function() { return C }), n.d(t, "b", function() { return E }), n.d(t, "h", function() { return w }), n.d(t, "i", function() { return x });
    var a = n(5),
        r = n(12),
        i = n(64),
        o = n(54),
        c = n(134),
        s = n(26),
        u = n(154),
        l = n(732),
        d = function(e) { return e && e.amount ? "minutes" === e.units ? 60 * e.amount * 1e3 : 1e3 * e.amount : 0 },
        f = function(e, t) { if (!e || 0 === e.length) return 0; var n = e.find(function(e) { return e.url === t }); return n ? n.count : 0 },
        b = function(e, t) { if (!e || !t || 0 === t.length) return !1; var n = Object(u.b)(e); return !!t.find(function(t) { return t === e || "".concat(t, "/") === e || t === n.pathname || t === "/".concat(n.pathname) || t === n.pathname + n.search + n.hash || Object(l.a)(t, e) || Object(l.a)("".concat(t, "/"), e) || Object(l.a)("".concat(t), "".concat(n.pathname)) || Object(l.a)("".concat(t), "/".concat(n.pathname)) }) },
        p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            if (!t || !t.name || !t.operator) return !1;
            var n = t.name,
                a = t.operator,
                r = t.value,
                i = e[n];
            switch (a) {
                case "equals":
                    return i === r;
                case "not-equals":
                    return i !== r;
                case "contains":
                    return !!i && -1 !== i.indexOf(r);
                case "not-contains":
                    return !!i && -1 === i.indexOf(r);
                case "is-blank":
                    return !i;
                default:
                    return !1
            }
        },
        h = function(e, t) { if (!e || !t || 0 === t.length) return !1; var n = !0; return t.forEach(function(t) { p(e, t) || (n = !1) }), n },
        m = function(e, t) {
            var n = t.conditions,
                a = t.id,
                r = !1,
                c = function t() {
                    r || (window.requestAnimationFrame(function() {
                        e.dispatch(Object(i.i)({ pageWasScrolled: !0 }));
                        var r = Object(o.c)(e.getState());
                        j(n, r) && x(e, a, { delay: 500 }), window.removeEventListener("scroll", t)
                    }), r = !0)
                };
            window.addEventListener("scroll", c)
        },
        g = function(e, t) {
            var n = t.conditions,
                a = t.id,
                r = n ? d(n.timeOnPage) : 0,
                c = setTimeout(function() {
                    e.dispatch(Object(i.h)(null)), e.dispatch(Object(i.i)({ timeOnPagePassed: !0 }));
                    var t = Object(o.c)(e.getState());
                    j(n, t) && x(e, a)
                }, r);
            e.dispatch(Object(i.h)(c))
        },
        v = function() { return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).pageScroll },
        O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.timeOnPage;
            return !(!t || !t.amount)
        },
        j = function(e, t) {
            var n = v(e),
                a = O(e),
                r = t.pageWasScrolled,
                i = t.timeOnPagePassed;
            return n && a ? r && i : n ? r : !a || i
        },
        y = function(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                i = e.identifyAttributes,
                o = e.lastViewedUrls,
                c = e.pageViews,
                s = e.repeatPageViews,
                l = e.specificUrls,
                d = t.pageViews,
                p = t.repeatPageViews,
                m = a.currentUrl || Object(u.a)(),
                g = a.previousUrl || document.referrer,
                v = f(p, m);
            return !(c && c > d) && (!(s && s > v) && (!(l && l.length && !b(m, l)) && (!(o && o.length && !b(g, o)) && !(!r && i && i.length && !h(n, i)))))
        },
        _ = function(e, t) { return "first-visit" === e && !t },
        A = function(e, t) { return !!("conditional" === e || "first-visit" === e && t) },
        C = function(e, t) {
            var n = t ? Object(o.j)(e) : Object(r.B)(e),
                a = Object(o.f)(e);
            if (n && n.length) {
                var i = n.filter(function(e) {
                    var t = e.id,
                        n = e.conditions,
                        r = e.triggerType;
                    return _(r, n) && -1 === a.indexOf(t)
                });
                return i && i.length ? i[0] : null
            }
        },
        E = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = Object(a.a)(Object(a.a)({}, Object(s.e)(e)), Object(c.b)(e)),
                u = t ? Object(o.j)(e) : Object(r.B)(e),
                l = Object(o.f)(e),
                d = Object(o.g)(e),
                f = u.filter(function(e) {
                    var a = e.conditions,
                        r = e.id,
                        o = e.triggerType;
                    return A(o, a) && -1 === l.indexOf(r) && y(a, d, i, n, t)
                });
            return f && f.length ? f[0] : null
        },
        w = function(e, t) {
            var n = Object(r.D)(e),
                i = Object(o.j)(e),
                u = Object(a.a)(Object(a.a)({}, Object(s.e)(e)), Object(c.b)(e)),
                l = t.conditions,
                d = t.id;
            if (n) { if (0 === i.filter(function(e) { return e.id === d }).length) return !1 } else { var f = "selected" === t.audience; if (f) return !1; if (!f && function() { return l && l.identifyAttributes && l.identifyAttributes.length > 0 }() && !h(u, l ? l.identifyAttributes : null)) return !1 }
            return !0
        },
        x = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.delay || 3e3;
            setTimeout(function() { if (null === Object(o.b)(e.getState())) return e.dispatch(Object(i.f)(t)) }, a)
        }
}, , , function(e, t, n) {
    "use strict";

    function a(e) { return e ? e + 1 : 1 }
    n.d(t, "f", function() { return f }), n.d(t, "l", function() { return b }), n.d(t, "c", function() { return p }), n.d(t, "d", function() { return h }), n.d(t, "m", function() { return m }), n.d(t, "n", function() { return g }), n.d(t, "h", function() { return v }), n.d(t, "k", function() { return O }), n.d(t, "g", function() { return j }), n.d(t, "i", function() { return y }), n.d(t, "j", function() { return _ }), n.d(t, "b", function() { return A }), n.d(t, "e", function() { return C });
    var r = n(22),
        i = n(5),
        o = n(28),
        c = n.n(o),
        s = n(219),
        u = n(35),
        l = { chatInputFocusUpdater: null, chatInputIsFocused: !1, hasFooterShadow: !1, layoutHeaderHeightUpdater: 1, layoutHeaderHeight: null, layoutHeaderWithSmile: !1, layoutHeaderIsCompact: !1, layoutHeaderResizing: !1, layoutHeaderCanCompact: !1, layoutBodyIsScrollable: !1, modals: [], modalShowEscalation: !1, searchInputFocusUpdater: null, searchInputIsFocused: !1 },
        d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = t.payload;
            switch (t.type) {
                case s.g:
                    return Object(i.a)(Object(i.a)({}, e), {}, { hasFooterShadow: n.value });
                case s.d:
                    return Object(i.a)(Object(i.a)({}, e), {}, { modals: [].concat(Object(r.a)(e.modals), [n.id]) });
                case s.c:
                    return Object(i.a)(Object(i.a)({}, e), {}, { modals: Object(r.a)(e.modals).filter(function(e) { return e !== n.id }) });
                case s.m:
                    return Object(i.a)(Object(i.a)({}, e), {}, { modalShowEscalation: n.value });
                case s.a:
                    return Object(i.a)(Object(i.a)({}, e), {}, { chatInputFocusUpdater: a(e.chatInputFocusUpdater) });
                case s.f:
                    return Object(i.a)(Object(i.a)({}, e), {}, { chatInputIsFocused: n.value });
                case s.b:
                    return Object(i.a)(Object(i.a)({}, e), {}, { searchInputFocusUpdater: a(e.searchInputFocusUpdater) });
                case s.n:
                    return Object(i.a)(Object(i.a)({}, e), {}, { searchInputIsFocused: n.value });
                case s.j:
                    return Object(i.a)(Object(i.a)({}, e), {}, { layoutHeaderHeightUpdater: a(e.layoutHeaderHeightUpdater) });
                case s.l:
                    return Object(i.a)(Object(i.a)({}, e), {}, { layoutHeaderWithSmile: n.value });
                case s.h:
                    return Object(i.a)(Object(i.a)({}, e), {}, { layoutHeaderCanCompact: n.canCompact });
                case s.i:
                    return Object(i.a)(Object(i.a)({}, e), {}, { layoutHeaderIsCompact: n.isCompact });
                case s.k:
                    return Object(i.a)(Object(i.a)({}, e), {}, { layoutHeaderResizing: n.isResizing });
                case s.e:
                    return Object(i.a)(Object(i.a)({}, e), {}, { layoutBodyIsScrollable: n.value });
                default:
                    return e
            }
        },
        f = function(e) { return !!c()(e, "ui.modals", []).length },
        b = function(e) { return c()(e, "ui.modalShowEscalation") },
        p = function(e) { return c()(e, "ui.chatInputFocusUpdater") },
        h = function(e) { return c()(e, "ui.chatInputIsFocused") },
        m = function(e) { return c()(e, "ui.searchInputFocusUpdater") },
        g = function(e) { return c()(e, "ui.searchInputIsFocused") },
        v = function(e) { return c()(e, "ui.layoutHeaderHeightUpdater") },
        O = function(e) { return c()(e, "ui.layoutHeaderWithSmile") },
        j = function(e) { return c()(e, "ui.layoutHeaderCanCompact") },
        y = function(e) { return c()(e, "ui.layoutHeaderIsCompact") || Object(u.j)(e) },
        _ = function(e) { return c()(e, "ui.layoutHeaderResizing") },
        A = function(e) { return c()(e, "ui.layoutBodyIsScrollable") },
        C = function(e) { return c()(e, "ui.hasFooterShadow") };
    t.a = d
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", function() { return o }), n.d(t, "e", function() { return c }), n.d(t, "o", function() { return s }), n.d(t, "a", function() { return u }), n.d(t, "c", function() { return l }), n.d(t, "p", function() { return d }), n.d(t, "b", function() { return f }), n.d(t, "h", function() { return b }), n.d(t, "l", function() { return p }), n.d(t, "i", function() { return h }), n.d(t, "n", function() { return m }), n.d(t, "d", function() { return g }), n.d(t, "j", function() { return v }), n.d(t, "k", function() { return O }), n.d(t, "m", function() { return j }), n.d(t, "g", function() { return y });
    var a = n(219),
        r = n(87),
        i = n(12),
        o = function(e) { return { type: a.d, payload: { id: e } } },
        c = function(e) { return { type: a.c, payload: { id: e } } },
        s = function(e) { return { type: a.m, payload: { value: e } } },
        u = function() {
            return function(e, t) {
                if (Object(i.b)(t())) {
                    var n = Object(r.n)(t());
                    e(l()), n || e(d(!0))
                }
            }
        },
        l = function() { return { type: a.b } },
        d = function(e) { return { type: a.n, payload: { value: e } } },
        f = function() { return { type: a.a } },
        b = function(e) { return { type: a.f, payload: { value: e } } },
        p = function() { return { type: a.j } },
        h = function(e) { return { type: a.g, payload: { value: e } } },
        m = function(e) {
            return function(t, n) {
                var i = n(),
                    o = Object(r.i)(i);
                t({ type: a.l, payload: { value: e } }), !e && o && (t(O(!1)), t(p()))
            }
        },
        g = function(e) {
            return function(t, n) {
                if (e) {
                    var a = n();
                    if (Object(r.k)(a)) {
                        if (Object(r.g)(a)) {
                            var i = Object(r.i)(a);
                            if (!Object(r.j)(a)) {
                                var o = e.scrollTop,
                                    c = e.scrollHeight,
                                    s = e.clientHeight,
                                    u = o >= 28,
                                    l = u !== i,
                                    d = !0;
                                i || (d = s < c - 100), d && l && (t(O(u)), t(j(!0)))
                            }
                        }
                    }
                }
            }
        },
        v = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return function(t) { t({ type: a.h, payload: { canCompact: e } }) } },
        O = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return { type: a.i, payload: { isCompact: e } } },
        j = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return { type: a.k, payload: { isResizing: e } } },
        y = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return { type: a.e, payload: { value: e } } }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return u }), n.d(t, "f", function() { return l }), n.d(t, "d", function() { return d }), n.d(t, "e", function() { return f }), n.d(t, "b", function() { return b });
    var a = n(5),
        r = n(28),
        i = n.n(r),
        o = n(11),
        c = { isOpened: !1, isContainerMounted: !1, hasShownFabAnimation: !1, hasUnreadMessages: !1, isFullScreenOpened: !1, fullScreenContents: {}, inlineArticle: { id: null, type: "inline", data: {} } },
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case o._18:
                    return Object(a.a)(Object(a.a)({}, e), {}, { inlineArticle: Object(a.a)({}, c.inlineArticle), isOpened: t.isOpened });
                case o._20:
                    return Object(a.a)(Object(a.a)({}, e), {}, { isFullScreenOpened: t.isOpened, fullScreenContents: t.contents });
                case o._19:
                    return Object(a.a)(Object(a.a)({}, e), {}, { isContainerMounted: t.isMounted });
                case o._7:
                    return Object(a.a)(Object(a.a)({}, e), {}, { inlineArticle: t.payload, isOpened: !1 });
                case o.o:
                    return Object(a.a)(Object(a.a)({}, e), {}, { inlineArticle: Object(a.a)({}, c.inlineArticle) });
                default:
                    return e
            }
        };
    t.a = s;
    var u = function(e) { return i()(e, "status.inlineArticle") },
        l = function(e) { return i()(e, "status.isOpened") },
        d = function(e) { return i()(e, "status.isContainerMounted") },
        f = function(e) { return i()(e, "status.isFullScreenOpened") },
        b = function(e) { return i()(e, "status.fullScreenContents") }
}, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return l }), n.d(t, "a", function() { return d }), n.d(t, "b", function() { return f }), n.d(t, "d", function() { return b });
    var a = n(18),
        r = n(5),
        i = n(11),
        o = n(168),
        c = n(112),
        s = n(26),
        u = ["name", "email", "signature"],
        l = function(e) {
            var t = e.name,
                n = void 0 === t ? "" : t,
                a = e.email,
                o = void 0 === a ? "" : a;
            return function(e, t) { var a = Object(s.e)(t()); return e({ type: i.R, user: Object(r.a)(Object(r.a)({}, a), {}, { name: n, email: o }) }) }
        },
        d = function(e) {
            return function(t, n) {
                var r = e.name,
                    c = void 0 === r ? "" : r,
                    s = e.email,
                    l = void 0 === s ? "" : s,
                    d = e.signature,
                    f = void 0 === d ? "" : d,
                    b = Object(a.a)(e, u);
                if (l.length && !o.b.test(l)) throw new Error("Invalid Email address");
                return t({ type: i._33, profile: b }), t({ type: i.R, user: { name: c, email: l, signature: f }, identified: !0 })
            }
        },
        f = function() { return function(e, t) { e(d({ name: "", email: "", signature: "" })), e(Object(c.j)({ name: "", email: "" })), e({ type: i._1 }) } },
        b = function() {
            return function(e, t) {
                var n = Object(s.e)(t());
                e({ type: i._36, user: n })
            }
        }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return a }), n.d(t, "e", function() { return r }), n.d(t, "f", function() { return i }), n.d(t, "a", function() { return o }), n.d(t, "c", function() { return c }), n.d(t, "d", function() { return s });
    var a = "HSBeaconContainerFrame",
        r = "BeaconContainer-root",
        i = 40,
        o = 115,
        c = 650,
        s = 740
}, , , , function(e, t, n) {
    "use strict";
    var a = n(16),
        r = n(218),
        i = n(37),
        o = n(33),
        c = n(24),
        s = n(104);
    t.a = function(e) {
        function t() {
            var e = b.location;
            e && e.pathname && 0 === e.pathname.indexOf("/answers/article/") ? n.dispatch(Object(o.c)({ id: u, isChild: !0 })) : n.dispatch(Object(i.b)(d))
        }
        var n = e.store,
            u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!u) return a.a.error("Beacon('article') error: Missing articleId");
        if ("string" !== typeof u) return a.a.error("Beacon('article') error: Invalid articleId, it should be a string");
        if (l && (l.type === s.a.MODAL || l.type === s.a.SIDEBAR)) return n.dispatch(Object(c.b)(u, l.type));
        var d = "/answers/article/".concat(u),
            f = n.getState(),
            b = f.router;
        f.status.isOpened ? t() : (Object(r.a)({ store: n }), setTimeout(function() { t() }, 300))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "b", function() { return r }), n.d(t, "c", function() { return i }), n.d(t, "e", function() { return o }), n.d(t, "d", function() { return c }), n.d(t, "f", function() { return s });
    var a = { INLINE: "inline", MODAL: "modal", SIDEBAR: "sidebar" },
        r = 620,
        i = 400,
        o = -10,
        c = -5,
        s = 370
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return i }), n.d(t, "b", function() { return o }), n.d(t, "a", function() { return c });
    var a = n(5),
        r = n(164),
        i = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                r = t;
            return n.hasOwnProperty(e) && (r = n[e]), o(r, a)
        },
        o = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return Object.keys(t).length > 0 ? e.replace(/\{\{\s?([^{}\s]*)\s?\}\}/g, function(e, n) { return t.hasOwnProperty(n) ? t[n] : n }) : e },
        c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.a;
            return e && t ? Object(a.a)(Object(a.a)({}, t), e) : Object(a.a)({}, t)
        }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return s }), n.d(t, "b", function() { return u }), n.d(t, "d", function() { return l });
    var a = n(5),
        r = n(221),
        i = n(11),
        o = { avatars: null, customFields: null, docsDisabled: !1, enabled: !1, smartSuggestions: null },
        c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case i.y:
                    var n = function(e, t) { return t };
                    return Object(r.a)(e, Object(a.a)({ enabled: !0 }, t.demo), { arrayMerge: n });
                case i.z:
                    return o;
                default:
                    return e
            }
        },
        s = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return !!(e && e.demo && e.demo.enabled) },
        u = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return !!(e && e.demo && e.demo.enabled && e.demo.demoChatEnabled) },
        l = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return !!(e && e.demo && e.demo.enabled && e.demo.messagePreviewActionsEnabled) };
    t.a = c
}, function(e, t, n) {
    "use strict";

    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.status,
            a = e.data,
            r = void 0 === a ? {} : a,
            i = r.errors,
            o = void 0 === i ? [] : i;
        return 401 === n && r && "Invalid email" === r.message ? [{ field: "email", message: t.emailValidationLabel }] : o.length ? o : [{ field: "default", message: t.defaultMessageErrorText }]
    }
    n.d(t, "j", function() { return j }), n.d(t, "i", function() { return y }), n.d(t, "a", function() { return _ }), n.d(t, "f", function() { return A }), n.d(t, "h", function() { return C }), n.d(t, "e", function() { return w }), n.d(t, "g", function() { return S }), n.d(t, "b", function() { return k }), n.d(t, "d", function() { return M }), n.d(t, "c", function() { return N });
    var r = n(5),
        i = n(18),
        o = n(30),
        c = n(31),
        s = n(11),
        u = n(61),
        l = n(59),
        d = n(329),
        f = n(136),
        b = n(12),
        p = n(107),
        h = n(297),
        m = n(41),
        g = n(26),
        v = n(36),
        O = ["attachments", "attachmentsProgress", "persist"],
        j = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return { type: s._31, payload: e, meta: t } },
        y = function(e) { return { type: s._28, payload: e } },
        _ = function(e, t) { return { type: s.a, attachment: e, attachmentType: t } },
        A = function(e) { return { type: s.X, index: e } },
        C = function(e) { return { type: s._23, payload: e } },
        E = function(e, t, n, a) {
            var r = a.actions,
                i = a.url,
                c = a.payload;
            return Object(o.b)(e, { method: "post", actions: r, url: i, header: t, deviceId: n, payload: c })
        },
        w = function(e, t) {
            return function(n, a) {
                var r = a(),
                    i = r.config.beaconId,
                    o = function() { return n(x.apply(void 0, arguments)) };
                return Object(d.a)(i, e.attachments, o, t)
            }
        },
        x = function(e) { return { type: s._22, progress: e } },
        S = function(e, t) {
            return function(n, o) {
                var c = Object(b.d)(o()),
                    s = Object(p.a)(Object(b.x)(o())),
                    u = Object(h.a)(t, s),
                    l = u(e);
                if (n(k()), l.forEach(function(e) { return n(T(e)) }), l.length) return Promise.reject();
                var d = e.email,
                    f = Object(g.e)(o()),
                    m = o(),
                    j = m.auth,
                    y = j.deviceId,
                    _ = f.email,
                    A = f.signature,
                    C = Object(v.d)(o());
                return d !== _ && (C = Object(g.b)(d, A, y)), n(w(e, C)).catch(function(e) { throw n(x(0)), n(T({ field: "attachments", message: s.attachmentErrorText })), e }).then(function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    n(x(0));
                    var o = (e.attachments, e.attachmentsProgress, e.persist, Object(i.a)(e, O));
                    return n(I(c, Object(r.a)(Object(r.a)({}, o), {}, { attachmentIds: t }), C)).catch(function(e) { throw a(e.response, s).forEach(function(e) { return n(T(e)) }), e })
                })
            }
        },
        T = function(e) {
            var t = e.field,
                n = e.message,
                a = e.data;
            return { type: s.d, error: { field: t, message: n, data: a } }
        },
        k = function() { return { type: s.p } },
        I = function(e, t, n) {
            return function(a, i, o) {
                var d = o.events,
                    f = t.text,
                    b = t.name,
                    p = t.subject,
                    h = i(),
                    g = h.config.messaging.contactForm.customFieldsEnabled,
                    O = h.timeline,
                    j = Object(r.a)({}, t),
                    y = i(),
                    _ = Object(v.c)(y),
                    A = Object(m.c)(y);
                return !g && j.fields && delete j.fields, A && (j.sessionAttributes = A), j.page = { url: window.location.href || "Unknown URL", title: document.title || "Untitled Page" }, j.activity = O && O.activity, a(Object(l.b)({ name: b, subject: p, message: f })), d && d.emit(u.d, j), E(a, n, _, { actions: s.U, url: "".concat(c.a, "/v1/").concat(e, "/conversations"), payload: j })
            }
        },
        M = function(e, t) {
            return function() {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                return f.a.apply(void 0, [function(e, n) {
                    var a = n(),
                        r = a.config,
                        i = r.noCache,
                        c = r.beaconId,
                        u = Object(v.c)(n()),
                        l = Object(b.f)(n());
                    return Object(o.b)(e, { actions: s.L, url: "".concat(l, "/v1/").concat(c, "/fields/contact-form"), deviceId: u, cancelToken: t, noCache: i })
                }, "customFields"].concat(n))
            }
        },
        N = function(e, t) {
            return function() {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                return f.a.apply(void 0, [function(e, n) {
                    var a = n(),
                        r = a.config,
                        i = a.config.beaconId,
                        c = r.noCache,
                        u = Object(v.c)(n()),
                        l = Object(b.f)(n());
                    return Object(o.b)(e, { actions: s.D, url: "".concat(l, "/v1/").concat(i, "/agents"), deviceId: u, cancelToken: t, noCache: c })
                }, "avatars"].concat(n))
            }
        }
}, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function a() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; return parseInt(Object(r.repeat)("9", e), 10) }
    n.d(t, "a", function() { return i });
    var r = n(68),
        i = (n.n(r), { ContainerFrame: a(8), BeaconFabButtonFrame: a(8) - 1, FullScreenFrame: a(9), Tooltip: a(6) })
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return o });
    var a = n(11),
        r = {},
        i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case a._33:
                    var n = t.profile;
                    return void 0 === n ? r : n;
                default:
                    return e
            }
        };
    t.a = i;
    var o = function(e) { return e.profile }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return b }), n.d(t, "b", function() { return p });
    var a = n(22),
        r = n(5),
        i = n(11),
        o = n(61),
        c = { activity: [] },
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case i._17:
                    var n = e.activity,
                        a = t.event;
                    return f(a, e) ? e : u(n, a, e);
                case i.B.SUCCESS:
                    var s = t.data,
                        l = s.url,
                        d = s.name,
                        b = { type: o.a, timestamp: new Date, url: l, title: d },
                        p = e.activity;
                    return u(p, b, e);
                case i.U.SUCCESS:
                case i.w.SUCCESS:
                    return Object(r.a)(Object(r.a)({}, e), {}, { activity: [] });
                default:
                    return e
            }
        },
        u = function(e, t, n) { var i = [].concat(Object(a.a)(e), [t]); return i.length > 15 && i.shift(), Object(r.a)(Object(r.a)({}, n), {}, { activity: i }) },
        l = function(e, t) {
            var n = e.type,
                a = t.activity;
            return n === o.b && a && !!a.length && a.some(function(e) { return e.type === o.b })
        },
        d = function(e, t) {
            var n = e.type,
                a = e.url,
                r = t.activity;
            if (n !== o.h || !r || !r.length) return !1;
            var i = r[r.length - 1],
                c = i.type,
                s = i.url;
            return n === c && a === s
        },
        f = function(e, t) { return d(e, t) || l(e, t) };
    t.a = s;
    var b = function(e) { return e.timeline && e.timeline.activity || [] },
        p = function(e) { return b(e).filter(function(e) { return e.type === o.h }) }
}, function(e, t, n) {
    "use strict";
    var a = function(e, t, n, a) {
        var r = a(),
            i = r.demo,
            o = void 0 === i ? {} : i;
        return !o.enabled || t && !o[t] ? e(n, a) : Promise.resolve()
    };
    t.a = a
}, , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "b", function() { return r });
    var a = function() {
            var e = window.location,
                t = e.protocol,
                n = e.hash,
                a = e.host,
                r = e.pathname,
                i = e.search;
            return "".concat(t, "//").concat(a).concat(r).concat(i).concat(n)
        },
        r = function(e) { var t = document.createElement("a"); return t.href = e || "", t }
}, , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return f }), n.d(t, "f", function() { return h }), n.d(t, "g", function() { return m }), n.d(t, "d", function() { return g }), n.d(t, "e", function() { return v }), n.d(t, "c", function() { return O });
    var a = n(22),
        r = n(18),
        i = n(5),
        o = n(28),
        c = n.n(o),
        s = n(30),
        u = n(11),
        l = n(681),
        d = ["fields"],
        f = { name: "", email: "", subject: "", text: "", attachments: [], fields: [], persist: !0 },
        b = { avatars: Object(s.c)(), customFields: Object(s.c)(), message: f, messageErrors: [], showChatAvailabilityChangeInfo: !1 },
        p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case u.D.REQUEST:
                    return Object(s.f)(e, "avatars");
                case u.D.SUCCESS:
                    return Object(s.g)(e, "avatars", { data: t.data.items, timestamp: new Date });
                case u.D.FAILURE:
                    return Object(s.e)(e, "avatars");
                case u.L.REQUEST:
                    return Object(s.f)(e, "customFields");
                case u.L.SUCCESS:
                    return Object(s.g)(e, "customFields", { data: t.data.items, timestamp: new Date });
                case u.L.FAILURE:
                    return Object(s.e)(e, "customFields");
                case u.y:
                    var n = t.demo,
                        o = n.avatars,
                        c = n.customFields,
                        p = Object(i.a)({}, e);
                    return o && (p = Object(s.g)(p, "avatars", { data: o })), c && (p = Object(s.g)(p, "customFields", { data: c })), p;
                case u._31:
                    var h = t.payload,
                        m = h.fields,
                        g = Object(r.a)(h, d),
                        v = t.meta,
                        O = v.persist,
                        j = v.prefilled,
                        y = j && m ? m.map(function(e) { return Object(i.a)(Object(i.a)({}, e), {}, { prefilled: !0 }) }) : m || e.message.fields;
                    return Object(i.a)(Object(i.a)({}, e), {}, { message: Object(i.a)(Object(i.a)(Object(i.a)({}, e.message), g), {}, { fields: Object(l.a)(y, "id"), persist: !1 !== O }) });
                case u.d:
                    var _ = e.messageErrors,
                        A = t.error,
                        C = A.field,
                        E = _.filter(function(e) { var t = e.field; return C !== t });
                    return E.push(A), Object(i.a)(Object(i.a)({}, e), {}, { messageErrors: E });
                case u.p:
                    return Object(i.a)(Object(i.a)({}, e), {}, { messageErrors: [] });
                case u._28:
                    var w = t.payload,
                        x = e.message.fields.filter(function(e) { return e.id !== w.id });
                    return x.push(w), Object(i.a)(Object(i.a)({}, e), {}, { message: Object(i.a)(Object(i.a)({}, e.message), {}, { fields: x }) });
                case u.a:
                    var S = t.attachment,
                        T = t.attachmentType;
                    return Object(i.a)(Object(i.a)({}, e), {}, { message: Object(i.a)(Object(i.a)({}, e.message), {}, { attachments: [].concat(Object(a.a)(e.message.attachments), [{ attachmentId: null, attachmentType: T, attachmentFileName: S.name, attachmentFileSize: S.size, attachmentFileObject: S }]) }) });
                case u.X:
                    return Object(i.a)(Object(i.a)({}, e), {}, { message: Object(i.a)(Object(i.a)({}, e.message), {}, { attachments: e.message.attachments.filter(function(e, n) { return n !== t.index }) }) });
                case u._22:
                    return Object(i.a)(Object(i.a)({}, e), {}, { message: Object(i.a)(Object(i.a)({}, e.message), {}, { attachmentsProgress: t.progress }) });
                case u.U.SUCCESS:
                    var k = e.message;
                    return Object(i.a)(Object(i.a)({}, e), {}, { message: k });
                case u._23:
                    return Object(i.a)(Object(i.a)({}, e), {}, { showChatAvailabilityChangeInfo: t.payload });
                case u.Z:
                    return Object(i.a)(Object(i.a)({}, e), {}, { message: f });
                default:
                    return e
            }
        },
        h = function(e) { return e.message.message },
        m = function(e) { return e.message.messageErrors },
        g = function(e) { return e.message.showChatAvailabilityChangeInfo },
        v = function(e) { return e.message.customFields },
        O = function(e) { return c()(e, "message.avatars") };
    t.a = p
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return b });
    var a = n(5),
        r = n(451),
        i = n(452),
        o = n(453),
        c = n(454),
        s = n(455),
        u = n(456),
        l = n(457),
        d = n(458),
        f = n(459),
        b = Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({}, r.a), i.a), o.a), c.a), s.a), u.a), l.a), d.a), f.a)
}, , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(46),
        s = n.n(c),
        u = n(109),
        l = n.n(u),
        d = n(324),
        f = n.n(d),
        b = n(67),
        p = n.n(b),
        h = n(0),
        m = n.n(h),
        g = n(325),
        v = n(21),
        O = n.n(v),
        j = function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "renderIllo", value: function() { var e = this.props.illo; return e ? m.a.createElement("div", { className: "c-ErrorState__customIlloWrapper" }, m.a.createElement(g.a, { name: e, "aria-hidden": !0 })) : m.a.createElement("div", { className: "c-ErrorState__illoWrapper" }, m.a.createElement(f.a, { name: "cross-white", size: "72", "aria-hidden": !0 })) } }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.message,
                        a = e.retryCallback,
                        r = e.retryLabel,
                        i = a && r,
                        o = O()("c-ErrorState", t);
                    return m.a.createElement(p.a, { className: o }, m.a.createElement("div", { className: "c-ErrorState__content" }, this.renderIllo(), m.a.createElement("div", { className: "c-ErrorState__message", "aria-live": "polite" }, m.a.createElement(s.a, { size: "13" }, n), i && m.a.createElement(l.a, { block: !0, onClick: a }, m.a.createElement(s.a, { size: "13" }, r)))))
                }
            }]), t
        }(h.PureComponent);
    j.defaultProps = { message: "", retryCallback: function() {}, retryLabel: "" }, t.a = j
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return a }), n.d(t, "a", function() { return r });
    var a = /^\S+@\S+\.\S+$/,
        r = { body: 15e3, customFields: 255, email: 255, name: 40, subject: 250 }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".c-ScrollableNode";
        return function(n) {
            function a() {
                var e;
                Object(i.a)(this, a);
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                return e = u.call.apply(u, [this].concat(r)), e.state = { shadow: !1 }, e._isMounted = !1, e.scrollableNode = null, e.scrollableSelector = t, e.setScrollableNodeRef = function(t) { e.scrollableNode = t }, e.onScroll = function(t) {
                    var n = t.target,
                        a = n.scrollTop >= n.scrollHeight - n.offsetHeight - 5;
                    e.state.shadow === a && e.safeSetState({ shadow: !a })
                }, e
            }
            Object(c.a)(a, n);
            var u = Object(s.a)(a);
            return Object(o.a)(a, [{ key: "componentDidMount", value: function() { this._isMounted = !0, d(this.scrollableNode, this.onScroll, this.scrollableSelector) } }, { key: "componentWillUnmount", value: function() { this._isMounted = !1, f(this.scrollableNode, this.onScroll, this.scrollableSelector) } }, { key: "safeSetState", value: function(e, t) { this._isMounted && this.setState(e, t) } }, {
                key: "render",
                value: function() {
                    var t = this.state.shadow,
                        n = this.setScrollableNodeRef,
                        a = Object(r.a)(Object(r.a)({}, this.props), {}, { setScrollableNodeRef: n, shadow: t });
                    return l.a.createElement(e, a)
                }
            }]), a
        }(u.Component)
    }
    t.a = a;
    var r = n(5),
        i = n(6),
        o = n(7),
        c = n(8),
        s = n(9),
        u = n(0),
        l = n.n(u),
        d = function(e, t, n) {
            if (e) {
                var a = n ? e.querySelector(n) : e;
                a && (a.addEventListener("scroll", t), setTimeout(function() { var e; "function" === typeof Event ? e = new Event("scroll") : (e = document.createEvent("Event"), e.initEvent("scroll", !0, !0)), a.dispatchEvent(e) }, 0))
            }
        },
        f = function(e, t, n) {
            if (e) {
                var a = n ? e.querySelector(n) : e;
                a && a.removeEventListener("scroll", t)
            }
        }
}, , , , function(e, t, n) {
    "use strict";
    var a = n(631);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(647);
    t.a = a.a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(24);
    t.a = function(e, t) {
        var n = e.store,
            r = window.location.href,
            i = document.title || "";
        n.dispatch(Object(a.c)(!0, { url: r, title: i }))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() { return r }), n.d(t, "c", function() { return i }), n.d(t, "m", function() { return o }), n.d(t, "b", function() { return c }), n.d(t, "n", function() { return s }), n.d(t, "a", function() { return u }), n.d(t, "f", function() { return l }), n.d(t, "j", function() { return d }), n.d(t, "l", function() { return f }), n.d(t, "h", function() { return b }), n.d(t, "i", function() { return p }), n.d(t, "k", function() { return h }), n.d(t, "e", function() { return m }), n.d(t, "g", function() { return g });
    var a = function(e) { return "@@UI/".concat(e) },
        r = a("MODAL_OPEN"),
        i = a("MODAL_CLOSE"),
        o = a("UPDATE_MODAL_ESCALATION"),
        c = a("FOCUS_SEARCH_INPUT"),
        s = a("UPDATE_SEARCH_INPUT_FOCUS"),
        u = a("FOCUS_CHAT_INPUT"),
        l = a("UPDATE_CHAT_INPUT_FOCUS"),
        d = a("UPDATE_HEADER_HEIGHT"),
        f = a("UPDATE_HEADER_SMILE"),
        b = a("UPDATE_HEADER_CAN_COMPACT"),
        p = a("UPDATE_HEADER_COMPACT"),
        h = a("UPDATE_HEADER_RESIZING"),
        m = a("UPDATE_BODY_SCROLLABLE"),
        g = a("UPDATE_HAS_FOOTER_SHADOW")
}, function(e, t, n) {
    "use strict";
    n.d(t, "l", function() { return l }), n.d(t, "i", function() { return d }), n.d(t, "f", function() { return f }), n.d(t, "h", function() { return b }), n.d(t, "j", function() { return p }), n.d(t, "g", function() { return h }), n.d(t, "a", function() { return g }), n.d(t, "d", function() { return v }), n.d(t, "c", function() { return O }), n.d(t, "e", function() { return j }), n.d(t, "b", function() { return A }), n.d(t, "k", function() { return C });
    var a = n(5),
        r = n(22),
        i = n(309),
        o = n(49),
        c = n(460),
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return Object(r.a)(e).map(function(e) { return t && "function" === typeof t ? t(e) : e })
        },
        u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "id";
            return function(n, a) { return s(e, function(e) { return e[t] === n && a && "function" === typeof a ? a(e) : e }) }
        },
        l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            return u(e, "id")(t, n)
        },
        d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            return t ? l(e, t, function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { createdAt: n }) }) : e
        },
        f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return t ? l(e, t, function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { error: n, isUploading: !1 }) }) : e
        },
        b = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return t ? l(e, t, function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { error: !1 }) }) : e
        },
        p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return t ? l(e, t, function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { error: !n && e.error, isUploading: n }) }) : e
        },
        h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            if (!t || !n || !n.id) return e;
            var r = n.attachments;
            if (!r || !r.length) return e;
            var c = r[0],
                s = { error: !1, isUploading: !1 };
            return l(e, t, function(e) { return i.a.indexOf(c.mime) >= 0 ? Object(a.a)(Object(a.a)(Object(a.a)({}, e), n), {}, { attachments: [], type: o.f.image, url: c.url }, s) : Object(a.a)(Object(a.a)({}, n), s) })
        },
        m = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            if (t) { var n = e.filter(function(e) { return e.id === t }); return n.length ? n[0] : void 0 }
        },
        g = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return !!m(e, t)
        },
        v = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                a = arguments.length > 3 ? arguments[3] : void 0;
            return Object(c.a)(a) ? [].concat(Object(r.a)(e.reverse()), Object(r.a)(t)) : [].concat(Object(r.a)(n), Object(r.a)(e.reverse().slice(1)), Object(r.a)(t))
        },
        O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = 1 === a.page ? e.slice(0, -1) : e;
            if (!i.length) return [];
            var o = [].concat(Object(r.a)(t), Object(r.a)(n));
            return i.reduce(function(e, t) { return o.filter(function(e) { return e.id === t.id }).length || e.push(t), e }, [])
        },
        j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return [].concat(Object(r.a)(e), Object(r.a)(t)).sort(function(e, t) {
                var n = new Date(e.createdAt).getTime(),
                    a = new Date(t.createdAt).getTime();
                return n < a ? -1 : n > a ? 1 : 0
            })
        },
        y = function(e) { return e && e.type === o.a.agent ? e.displayName : null },
        _ = function(e) { return e.attachments && e.attachments[0] && e.attachments[0].mime && e.attachments[0].mime.indexOf("image") >= 0 },
        A = function(e) {
            var t = e.author,
                n = e.rawBody;
            if (!t || !n) return "";
            var a = t && t.name && "customer" === t.name,
                r = "";
            if (!a) {
                var i = y(t),
                    o = i ? "".concat(i, ": ") : "";
                n && (r = "".concat(o).concat(n)), _(e) && (o = i ? "".concat(i, " ") : "", r += "".concat(o, "sent an image."))
            }
            return r
        },
        C = function(e) { if (e.length > 0) { var t = e[e.length - 1]; if (t.createdAt) return new Date(new Date(t.createdAt).getTime() + 1) } return new Date }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "b", function() { return r }), n.d(t, "d", function() { return i }), n.d(t, "c", function() { return o });
    var a = "CONVERSATION_CREATE_CANCEL_TOKEN",
        r = "CONVERSATION_DESTROY_CANCEL_TOKEN",
        i = "START_LOAD_MORE_CONVERSATIONS",
        o = "END_LOAD_MORE_CONVERSATIONS"
}, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return O });
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(125),
        l = (n.n(u), n(160)),
        d = n.n(l),
        f = n(491),
        b = n(502),
        p = n(511),
        h = n(317),
        m = n(62),
        g = n(236),
        v = n(40),
        O = d()({ loader: function() { return n.e(0).then(n.bind(null, 769)) }, loading: b.a }),
        j = function(e) {
            function t(e, r) {
                var i;
                return Object(a.a)(this, t), i = n.call(this, e, r), i.hasLoaded = !1, i.updateHasLoaded = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.props;
                    if (!i.hasLoaded) {
                        var t = e.status.isOpened;
                        i.hasLoaded = t
                    }
                }, i.updateHasLoaded(), i
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "UNSAFE_componentWillReceiveProps", value: function(e) { this.updateHasLoaded(e) } }, {
                key: "renderCloseButton",
                value: function() {
                    var e = this.props.toggleBeacon,
                        t = Object(g.a)(this.props),
                        n = Object(v.b)();
                    return t === m.f || n ? s.a.createElement(h.a, { isMobile: n, onClick: e }) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.history,
                        n = e.status,
                        a = e.toggleBeacon,
                        r = n.isContainerMounted,
                        i = n.isOpened,
                        o = i && r,
                        c = { history: t, toggleBeacon: a };
                    return s.a.createElement(u.CSSTransition, { in: o, timeout: 300, classNames: "BeaconContainer", "aria-label": "Customer Support", "aria-haspopup": "true", "aria-expanded": o }, s.a.createElement(p.a, { isVisible: o }, this.renderCloseButton(), this.hasLoaded && s.a.createElement(f.a, null, s.a.createElement(O, c))))
                }
            }]), t
        }(c.Component);
    t.b = j
}, , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return i }), n.d(t, "b", function() { return c });
    var a = n(28),
        r = n.n(a),
        i = function(e) { return r()(e, "config.display.style") },
        o = function(e) { return r()(e, "config.display.position") },
        c = function(e) { return "left" === o(e) }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "b", function() { return r }), n.d(t, "c", function() { return i }), n.d(t, "d", function() { return o }), n.d(t, "e", function() { return c });
    var a = "c-Content__imagePreview",
        r = "".concat(a, "__button"),
        i = "".concat(a, "__image"),
        o = "".concat(a, "--no-preview"),
        c = "has-modal-open"
}, function(e, t, n) {
    "use strict";
    var a = n(620);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return O }), n.d(t, "a", function() { return j }), n.d(t, "d", function() { return y }), n.d(t, "c", function() { return _ }), n.d(t, "e", function() { return A }), n.d(t, "f", function() { return C });
    var a, r, i, o, c, s, u = n(15),
        l = n(29),
        d = n.n(l),
        f = n(86),
        b = n.n(f),
        p = n(14),
        h = n.n(p),
        m = n(10),
        g = (n.n(m), n(173)),
        v = n(633),
        O = h()("div")(a || (a = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding: 10px 10px 20px;\n  word-wrap: break-word;\n"]))),
        j = h()(v.a)(r || (r = Object(u.a)(["\n  div#fullArticle {\n    font-size: 14px;\n    font-size: var(--HSDSGlobalFontSize, 14px);\n\n    a,\n    button {\n      &:focus {\n        outline-offset: 1px;\n        outline-style: auto !important;\n        outline-width: 2px !important;\n        -moz-outline-radius: 4px;\n      }\n    }\n\n    .u-overflow-x {\n      overflow-x: auto;\n\n      td {\n        min-width: 100px;\n      }\n    }\n\n    .c-Content__imagePreview__button {\n      background: ", ";\n      cursor: pointer;\n      display: ", ";\n\n      & > span {\n        pointer-events: none;\n      }\n\n      & path {\n        fill: ", ";\n      }\n    }\n  }\n"])), function(e) { return Object(m.getThemeBrandProp)(e, "brandColor") }, function(e) { return e.isMobile ? "none" : "block" }, function(e) { return Object(m.getThemeBrandProp)(e, "textColor") }),
        y = h()(g.a)(i || (i = Object(u.a)(["\n  display: inline;\n"]))),
        _ = h()("a")(o || (o = Object(u.a)(["\n  appearance: none;\n  display: block;\n  outline: none;\n\n  &:focus {\n    outline: none;\n    h1 {\n      text-decoration: underline;\n    }\n  }\n"]))),
        A = h()(b.a)(c || (c = Object(u.a)(["\n  &:hover {\n    text-decoration: underline;\n\n    .c-Icon__icon {\n      display: block;\n    }\n  }\n"]))),
        C = h()(d.a)(s || (s = Object(u.a)(["\n  bottom: -4px;\n  margin-left: 5px;\n  transform: scaleX(-1);\n\n  .c-Icon__icon {\n    display: none;\n  }\n"])))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return m }), n.d(t, "d", function() { return g }), n.d(t, "b", function() { return v }), n.d(t, "a", function() { return O });
    var a, r, i, o, c = n(15),
        s = n(86),
        u = n.n(s),
        l = n(294),
        d = n.n(l),
        f = n(14),
        b = n.n(f),
        p = n(10),
        h = (n.n(p), { borderWidth: 1, offset: 20 }),
        m = b()("div")(a || (a = Object(c.a)(["\n  margin-top: auto;\n"]))),
        g = b()("section")(r || (r = Object(c.a)(["\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  margin: 30px -30px -40px;\n  padding: 20px 30px 15px;\n"])), Object(p.getColor)("grey.200"), Object(p.getColor)("grey.400")),
        v = b()(u.a)(i || (i = Object(c.a)(["\n  color: ", ";\n  font-weight: 500;\n  padding: 0 0 19px;\n"])), Object(p.getColor)("charcoal.500")),
        O = b()(d.a)(o || (o = Object(c.a)(["\n  width: calc(100% + ", "px);\n  margin-left: -", "px;\n  margin-right: -", "px;\n\n  .c-ArticleCard__content .c-Truncate__content {\n    color: ", ";\n  }\n"])), 2 * h.offset + h.borderWidth, h.offset, h.offset, Object(p.getColor)("charcoal.400"))
}, , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(12),
        d = n(33),
        f = n(88),
        b = n(641),
        p = n(650),
        h = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.handleOnClickHappy = function(t) {
                    var n = e.props,
                        a = n.id,
                        r = n.submitArticleFeedback;
                    t && t.stopPropagation(), r(a, "positive")
                }, e.handleOnClickSad = function(t) {
                    var n = e.props,
                        a = n.id,
                        r = n.submitArticleFeedback,
                        i = n.onClickSad,
                        o = n.messagingEnabled;
                    t && t.stopPropagation(), r(a, "negative"), i({ messagingEnabled: o })
                }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.isFeedbackLoading,
                        n = e.labels,
                        a = e.rating,
                        r = e.shadow,
                        i = n.escalationQuestionFeedback,
                        o = n.escalationQuestionFeedbackYes,
                        c = n.escalationQuestionFeedbackNo,
                        u = n.escalationThanksFeedback,
                        l = { confirmationLabel: u, isLoading: t, questionLabel: i, yesLabel: o, noLabel: c, onClickHappy: this.handleOnClickHappy, onClickSad: this.handleOnClickSad, rating: a };
                    return s.a.createElement(p.a, { role: "toolbar", "aria-label": "Article feedback", shadow: r }, s.a.createElement(b.a, l))
                }
            }]), t
        }(c.Component);
    h.defaultProps = { isFeedbackLoading: !1, labels: {}, shadow: !1, submitArticleFeedback: function() {}, onClickSad: function() {} };
    var m = function(e) { return { messagingEnabled: e.config.messagingEnabled, labels: Object(l.x)(e) } },
        g = { submitArticleFeedback: d.h, onClickSad: function(e) { var t = e.messagingEnabled; return Object(f.o)(t) } };
    t.a = Object(u.b)(m, g)(h)
}, , , function(e, t, n) {
    "use strict";
    var a = n(167),
        r = n.n(a),
        i = n(0),
        o = n.n(i),
        c = n(296),
        s = n(99),
        u = n(21),
        l = n.n(u),
        d = function() { var e = l()("c-ArticleLoadingState"); return o.a.createElement("div", { className: e, style: { height: s.c } }, o.a.createElement(c.a, null), o.a.createElement(r.a.Paragraph, null), o.a.createElement(r.a.Image, { style: { marginBottom: "12px" } }), o.a.createElement(c.a, null), o.a.createElement(r.a.Paragraph, null), o.a.createElement(r.a.Paragraph, null)) };
    t.a = d
}, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var a = n(56),
        r = function(e) { return function(t, n) { return n().config.messaging.chatEnabled ? t(Object(a.l)()).then(function(t) { var n = t.data.agents; return e(!!(n && n.length > 0)) }) : e(!1) } };
    t.b = function(e, t) { var n = e.store; return r(t)(n.dispatch, n.getState) }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return r });
    var a = n(37),
        r = function(e) { return function(t) { t(Object(a.b)("/docs/search?query=".concat(e))) } };
    t.a = function(e, t) {
        var n = e.store;
        r(t)(n.dispatch)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return p }), n.d(t, "c", function() { return h });
    var a = n(18),
        r = n(0),
        i = n.n(r),
        o = n(32),
        c = n.n(o),
        s = n(715),
        u = n(16),
        l = n(747),
        d = n(768),
        f = ["demo"],
        b = function(e, t) {
            if (!t) return u.a.error("Invalid Beacon ID", t);
            var n = "string" === typeof t ? { beaconId: t } : t,
                r = n.demo,
                o = Object(a.a)(n, f);
            u.a.info("Initializing Beacon with ID ".concat(n.beaconId));
            var b = window.Beacon || {};
            return window.__onBeaconDestroy = function() { return h(e) }, Object(s.a)(o, r).then(function(t) {
                var n = t.store,
                    a = t.persistor,
                    r = t.history,
                    o = t.chatBot,
                    s = t.events,
                    u = t.initMessages,
                    f = Object(d.a)();
                window.Beacon = Object(l.a)(n, r, s), c.a.render(i.a.createElement(e, { readyQueue: b.readyQueue || [], store: n, history: r, initMessages: u, events: s, persistor: a, chatBot: o }), f)
            }).catch(function(e) { u.a.error("Unable to Load Beacon"), u.a.error(e) })
        },
        p = function(e, t) { return document.body ? setTimeout(function() { return b(e, t) }, 0) : document.addEventListener("DOMContentLoaded", function() { return b(e, t) }), t },
        h = function(e, t) {
            window.Beacon = function(t, n, a) {
                if ("init" === t) return p(e, n);
                window.Beacon.readyQueue.push({ method: t, options: n, data: a })
            }, window.Beacon.readyQueue = t || []
        };
    t.b = function() { return u.a.error("Beacon has already been initialized.") }
}, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s }), n.d(t, "b", function() { return u });
    var a = n(30),
        r = n(11),
        i = n(136),
        o = n(36),
        c = n(12),
        s = function(e, t, n) {
            return function() {
                for (var t = arguments.length, s = new Array(t), u = 0; u < t; u++) s[u] = arguments[u];
                return i.a.apply(void 0, [function(t, i) {
                    var s = i(),
                        u = s.config,
                        l = u || {},
                        d = l.noCache,
                        f = Object(o.c)(i()),
                        b = Object(c.f)(i());
                    return Object(a.b)(t, { actions: r.H, url: "".concat(b, "/v1/").concat(e), deviceId: f, cancelToken: n, noCache: d })
                }, !1].concat(s))
            }
        },
        u = function(e) { return { type: r._27, config: e } }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return c });
    var a = n(5),
        r = n(286),
        i = n(11),
        o = {};
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case r.b:
                var n = t.cancelToken,
                    c = t.timeout;
                return Object(a.a)(Object(a.a)({}, e), {}, { cancelToken: n, timeout: c });
            case r.c:
                return Object(a.a)(Object(a.a)({}, e), {}, { cancelToken: void 0, timeout: void 0 });
            case i.E.SUCCESS:
            case i.W.SUCCESS:
                var s = t.data.events.pagination.totalCount;
                return Object(a.a)(Object(a.a)({}, e), {}, { count: s });
            case i.F.SUCCESS:
                return Object(a.a)(Object(a.a)({}, e), {}, { count: e.count + 1 });
            case i._0:
                return { count: 0 };
            default:
                return e
        }
    };
    var c = function(e) { return e.chatSyncData }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "b", function() { return r }), n.d(t, "c", function() { return i });
    var a = 2e4,
        r = "CHAT_SYNC_DATA_START",
        i = "CHAT_SYNC_DATA_STOP"
}, function(e, t, n) {
    "use strict";
    var a = n(738),
        r = n(33),
        i = n(24);
    t.a = function(e) {
        var t = e.store,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = n.docsEnabled;
        delete n.docsEnabled;
        var c = Object.keys(n).length;
        return c ? t.dispatch(Object(a.a)(n)) : t.dispatch(Object(a.b)()), o ? t.dispatch(Object(r.e)()).then(function() { c && setTimeout(function() { t.dispatch(Object(i.c)(!0)) }, 500) }) : Promise.resolve()
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return f }), n.d(t, "b", function() { return b });
    var a = n(66),
        r = n.n(a),
        i = n(60),
        o = n(31),
        c = n(286),
        s = n(11),
        u = n(36),
        l = n(285),
        d = function(e, t, n) {
            return function(a, r) {
                a({ type: s.W.REQUEST });
                var c = "".concat(o.c, "/v1/chats/").concat(e, "?refetch=").concat(n),
                    l = Object(u.c)(r()),
                    d = Object(u.b)(r());
                return Object(i.a)({ deviceId: l, header: d }).get(c, { cancelToken: t }).then(function(e) { return a({ data: e.data, type: s.W.SUCCESS }) }).catch(function(e) { return a({ error: e, type: s.W.FAILURE }) })
            }
        },
        f = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.a;
            return function(a, s) {
                var f = r.a.CancelToken.source(),
                    b = "".concat(o.c, "/v1/chats/").concat(t, "/events/count"),
                    p = setTimeout(function() {
                        var r = Object(u.c)(s()),
                            o = Object(u.b)(s());
                        Object(i.a)({ deviceId: r, header: o }).get(b, { cancelToken: f.token }).then(function(e) {
                            var n = e.data.results,
                                r = n[t],
                                i = Object(l.b)(s()).count || 0;
                            return r > i ? a(d(t, f.token, r - i)).then(function() { return t }) : t
                        }).then(function(t) { return a(e(t, n)) })
                    }, n);
                return a({ cancelToken: f, timeout: p, type: c.b })
            }
        },
        b = function() {
            return function(e, t) {
                var n = Object(l.b)(t()),
                    a = n.cancelToken,
                    r = n.timeout;
                return a && a.cancel && "function" === typeof a.cancel && a.cancel("Chat sync request cancelled"), r && clearTimeout(r), e({ type: c.c })
            }
        }
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        if (e) {
            var n = e.conditions,
                a = Object(r.f)(n),
                i = Object(r.g)(n);
            if (!a && !i) return Object(r.i)(t, e.id);
            a && Object(r.d)(t, e), i && Object(r.e)(t, e)
        }
    }
    t.a = a;
    var r = n(84)
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return r }), n.d(t, "d", function() { return i }), n.d(t, "a", function() { return o }), n.d(t, "b", function() { return c }), n.d(t, "e", function() { return s });
    var a = /\S+/,
        r = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return a.test(e) },
        i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0;
            return -1 !== e.indexOf(t)
        },
        o = function() { return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/-|_/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(e, t) { return 0 === t ? e.toLowerCase() : e.toUpperCase() }).replace(/\s+|\W/g, "") },
        c = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return e.charAt(0).toUpperCase() + e.slice(1) },
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = document.createElement("div");
            return t.innerHTML = e, t.textContent || t.innerText || ""
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() { return r }), n.d(t, "c", function() { return i }), n.d(t, "a", function() { return o });
    var a = n(330),
        r = function(e) { return function(t) { return (!t || !t.length) && e } },
        i = function(e) { return function(t) { return !Object(a.b)(t) && e } },
        o = function(e) { return function() { return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).some(function(e) { return e.attachmentFileSize >= 1e7 }) && e } },
        c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = [];
                Object.keys(e).forEach(function(a) {
                    for (var r = e[a], i = Array.isArray(r) ? r : [r], o = 0; o < i.length; o++) {
                        var c = i[o],
                            s = t[a],
                            u = c(s, t);
                        if (u) { n.push({ field: a, message: u }); break }
                    }
                });
                var a = n.findIndex(function(e) { return "attachments" === e.field }),
                    r = t && t.attachments && t.attachments.filter(function(e) { return e.attachmentFileSize >= 1e7 });
                return n[a] && r.length > 0 && (n[a].data = r), n
            }
        };
    t.b = c
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return a }), n.d(t, "c", function() { return r }), n.d(t, "a", function() { return i });
    var a = "self",
        r = "user",
        i = "agent"
}, , , function(e, t, n) {
    "use strict";
    var a = n(167),
        r = n.n(a),
        i = n(0),
        o = n.n(i),
        c = function(e) {
            var t = e.isCard,
                n = t ? { padding: "4px 2px", marginBottom: "-11px" } : {};
            return o.a.createElement("div", { style: n }, o.a.createElement(r.a.Text, { width: "73%", withAnimations: !0 }), o.a.createElement(r.a.Text, { width: "85%", withAnimations: !0 }), o.a.createElement(r.a.Text, { width: "100%", withAnimations: !0 }), o.a.createElement(r.a.Text, { width: "93%", withAnimations: !0 }), o.a.createElement(r.a.Text, { width: "99%", withAnimations: !0 }))
        };
    t.a = c
}, function(e, t, n) {
    "use strict";
    var a = n(291),
        r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.showSubject,
                n = void 0 !== t && t,
                r = e.showName,
                i = void 0 !== r && r,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c = { email: [Object(a.d)(o.mayNotBeEmpty), Object(a.c)(o.emailValidationLabel)], text: Object(a.d)(o.mayNotBeEmpty), attachments: Object(a.a)(o.attachmentSizeErrorText) };
            return n && (c.subject = Object(a.d)(o.mayNotBeEmpty)), i && (c.name = Object(a.d)(o.mayNotBeEmpty)), Object(a.b)(c)
        };
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() { return h }), n.d(t, "e", function() { return m }), n.d(t, "a", function() { return g }), n.d(t, "c", function() { return v }), n.d(t, "g", function() { return y }), n.d(t, "h", function() { return _ }), n.d(t, "b", function() { return C }), n.d(t, "f", function() { return x });
    var a = n(60),
        r = n(66),
        i = n.n(r),
        o = n(16),
        c = n(98),
        s = (n.n(c), n(30)),
        u = n(31),
        l = n(11),
        d = n(222),
        f = n(12),
        b = n(36),
        p = function(e) { var t = e.count; return { type: l.K.SUCCESS, count: t } },
        h = function() {
            return function(e, t) {
                var n = Object(f.d)(t()),
                    r = Object(b.c)(t()),
                    i = Object(b.d)(t()),
                    c = "".concat(u.a, "/v1/").concat(n, "/conversations/count");
                return e({ type: l.K.REQUEST }), Object(a.a)({ deviceId: r, header: i }).get(c).then(function(t) { var n = t.data; return e(p(n)) }).catch(function(e) { return o.a.log("Error fetching conversation count", e) })
            }
        },
        m = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { page: 1 },
                t = e.page;
            return function(e, n) {
                var a = Object(b.d)(n()),
                    r = Object(b.c)(n()),
                    i = Object(f.d)(n()),
                    o = "".concat(u.a, "/v1/").concat(i, "/conversations?").concat(Object(c.stringify)({ page: t })),
                    d = n().conversations,
                    p = d.isLoadingMoreConversations,
                    h = d.loadMoreCancelToken,
                    m = h && h.token;
                return Object(s.b)(e, { actions: l.J, url: o, header: a, deviceId: r, payload: { page: t }, cancelToken: m }).then(function() { h && e(C()), p && e(w()) })
            }
        },
        g = function() { return { type: l.n } },
        v = function(e, t) {
            var n = t.id,
                a = t.cancelToken;
            return function(t, r) {
                var i = "".concat(u.a, "/v1/").concat(e, "/conversations/").concat(n),
                    o = Object(b.d)(r()),
                    c = Object(b.c)(r());
                return Object(s.b)(t, { actions: l.I, url: i, header: o, deviceId: c, payload: { id: n }, cancelToken: a })
            }
        },
        O = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; return { type: l.P.REQUEST, page: e } },
        j = function(e, t) { return { type: l.P.SUCCESS, conversationId: e, threads: t } },
        y = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return function(r, s) {
                var l = s(),
                    d = l.config.beaconId;
                r(O(n));
                var f = "".concat(u.a, "/v1/").concat(d, "/conversations/").concat(e, "/threads?").concat(Object(c.stringify)({ page: n })),
                    p = Object(b.c)(s()),
                    h = Object(b.d)(s());
                return Object(a.a)({ deviceId: p, header: h }).get(f, { cancelToken: t }).then(function(t) { var n = t.data; return r(j(e, n)) }).catch(function(t) { i.a.isCancel(t) ? o.a.log("Request canceled", t.message) : o.a.log("Error fetching conversation threads", e) })
            }
        },
        _ = function(e, t) {
            return function(n, r) {
                var i = Object(f.d)(r()),
                    c = "".concat(u.a, "/v1/").concat(i, "/conversations/").concat(e, "/threads/").concat(t, "/read/"),
                    s = Object(b.c)(r()),
                    l = Object(b.d)(r());
                return Object(a.a)({ deviceId: s, header: l }).get(c).then(function() { return n(m()) }).catch(function() { o.a.log("Error marking thread as read", e, t) })
            }
        },
        A = function() { return function(e, t) { return e(C()), e({ type: d.a, payload: { loadMoreCancelToken: r.CancelToken.source() } }) } },
        C = function() { return function(e, t) { var n = t().conversations.loadMoreCancelToken; return n && n.cancel(), e({ type: d.b }) } },
        E = function() { return { type: d.d } },
        w = function() { return { type: d.c } },
        x = function() {
            return function(e, t) {
                var n = t().conversations,
                    a = n.conversations,
                    r = n.loadMoreCancelToken,
                    i = a.data.paging,
                    o = i.page,
                    c = i.pages;
                if (!(r || o >= c)) { e(A()), e(E()); return e(m({ page: o + 1 })) }
            }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return u }), n.d(t, "e", function() { return l }), n.d(t, "d", function() { return d }), n.d(t, "b", function() { return f });
    var a = n(22),
        r = n(5),
        i = n(11),
        o = { text: "", attachments: [] },
        c = { reply: o, replyErrors: [], isSubmittingReply: !1 },
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case i._34:
                    return Object(r.a)(Object(r.a)({}, e), {}, { reply: Object(r.a)(Object(r.a)({}, e.reply), t.reply) });
                case i.f:
                    var n = e.replyErrors,
                        s = t.error,
                        u = s.field,
                        l = n.filter(function(e) { var t = e.field; return u !== t });
                    return l.push(s), Object(r.a)(Object(r.a)({}, e), {}, { replyErrors: l });
                case i.s:
                    return Object(r.a)(Object(r.a)({}, e), {}, { replyErrors: [] });
                case i.e:
                    var d = t.attachment,
                        f = t.attachmentType;
                    return Object(r.a)(Object(r.a)({}, e), {}, { reply: Object(r.a)(Object(r.a)({}, e.reply), {}, { attachments: [].concat(Object(a.a)(e.reply.attachments), [{ attachmentId: null, attachmentType: f, attachmentFileName: d.name, attachmentFileSize: d.size, attachmentFileObject: d }]) }) });
                case i.Y:
                    return Object(r.a)(Object(r.a)({}, e), {}, { reply: Object(r.a)(Object(r.a)({}, e.reply), {}, { attachments: e.reply.attachments.filter(function(e, n) { return n !== t.index }) }) });
                case i._35:
                    return Object(r.a)(Object(r.a)({}, e), {}, { reply: Object(r.a)(Object(r.a)({}, e.reply), {}, { attachmentsProgress: t.progress }) });
                case i.V.SUCCESS:
                case i.r:
                    return Object(r.a)(Object(r.a)({}, e), {}, { reply: o });
                case i._15:
                    return Object(r.a)(Object(r.a)({}, e), {}, { isSubmittingReply: !0 });
                case i._14:
                    return Object(r.a)(Object(r.a)({}, e), {}, { isSubmittingReply: !1 });
                default:
                    return e
            }
        },
        u = function(e) { return e.reply.reply },
        l = function(e) { return e.reply.reply.text },
        d = function(e) { return e.reply.replyErrors },
        f = function(e) { return e.reply.isSubmittingReply };
    t.a = s
}, , function(e, t, n) {
    "use strict";

    function a(e, t) { var n = t.conversation; return !n.data || e === n.data.id }
    n.d(t, "b", function() { return m }), n.d(t, "c", function() { return g });
    var r = n(18),
        i = n(5),
        o = n(28),
        c = n.n(o),
        s = n(30),
        u = n(11),
        l = n(222),
        d = n(682),
        f = n(683),
        b = ["fetchingThreadsPage"],
        p = { loadMoreCancelToken: void 0, isLoadingMoreConversations: !1, conversations: Object(s.c)(), conversation: Object(s.c)() },
        h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (t.type) {
                case u.J.REQUEST:
                    var n = t.payload,
                        o = n.page;
                    return Object(i.a)(Object(i.a)({}, e), {}, { conversations: Object(i.a)(Object(i.a)({}, e.conversations), {}, { isLoading: 1 === o, isError: !1 }) });
                case u.J.SUCCESS:
                    var c = Object.assign({}, e),
                        h = t.data,
                        m = t.payload,
                        g = h.paging,
                        v = g.page,
                        O = c.conversations.data;
                    return Object(i.a)(Object(i.a)({}, e), {}, { conversations: Object(i.a)(Object(i.a)({}, e.conversations), {}, { payload: m, data: Object(f.a)(h, 1 !== v && O ? O : void 0), isLoading: !1, isError: !1 }) });
                case u.J.FAILURE:
                    return Object(s.e)(e, "conversations");
                case u.I.REQUEST:
                    var j = e.conversation,
                        y = j.data,
                        _ = y || {},
                        A = _.id,
                        C = t.payload,
                        E = C.id,
                        w = E !== A;
                    return Object(s.f)(e, "conversation", { isLoading: w, data: j.data });
                case u.I.SUCCESS:
                    var x = t.data,
                        S = x.threads,
                        T = x.threadCount,
                        k = Object(d.a)(S, { page: 1, pages: Math.ceil(T / 10), pageSize: 10, count: T }),
                        I = Object(f.a)(k),
                        M = Object(i.a)(Object(i.a)({}, x), {}, { threads: I });
                    return Object(s.g)(e, "conversation", { data: M, payload: t.payload });
                case u.I.FAILURE:
                    return Object(s.e)(e, "conversation");
                case u.P.REQUEST:
                    return Object(i.a)(Object(i.a)({}, e), {}, { fetchingThreadsPage: t.page });
                case u.P.SUCCESS:
                    var N = t.threads;
                    if (!a(t.conversationId, e)) return e;
                    var L = N.items,
                        P = N.paging,
                        F = (e.fetchingThreadsPage, Object(r.a)(e, b)),
                        B = Object(i.a)({}, F.conversation);
                    return B.data = Object(i.a)(Object(i.a)({}, B.data), {}, { threads: Object(f.a)({ items: L, paging: P }, B.data.threads) }), Object(i.a)(Object(i.a)({}, F), {}, { conversation: B });
                case u.n:
                    return Object(i.a)(Object(i.a)({}, e), {}, { conversation: Object(s.c)() });
                case l.a:
                    return Object(i.a)(Object(i.a)({}, e), {}, { loadMoreCancelToken: t.payload.loadMoreCancelToken });
                case l.b:
                    return Object(i.a)(Object(i.a)({}, e), {}, { loadMoreCancelToken: void 0 });
                case l.d:
                    return Object(i.a)(Object(i.a)({}, e), {}, { isLoadingMoreConversations: !0 });
                case l.c:
                    return Object(i.a)(Object(i.a)({}, e), {}, { isLoadingMoreConversations: !1 });
                default:
                    return e
            }
        },
        m = function(e) { return c()(e, "conversations.conversations") },
        g = function(e) { return c()(e, "conversations.isLoadingMoreConversations") };
    t.a = h
}, , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(21),
        d = n.n(l),
        f = n(12),
        b = n(50),
        p = n(87),
        h = n(33),
        m = n(522),
        g = n(523),
        v = n(65),
        O = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e._isMounted = !1, e.handleOnClose = function() {
                    var t = e.props,
                        n = t.closeAllArticles,
                        a = t.history,
                        r = t.onClose;
                    t.showEscalation || (n(), Object(m.a)(a), r())
                }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "componentDidMount", value: function() { this._isMounted = !0 } }, { key: "componentWillUnmount", value: function() { this._isMounted = !1 } }, { key: "safeSetState", value: function(e, t) { this._isMounted && this.setState(e, t) } }, {
                key: "getClassName",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.className,
                        a = e.openedArticles,
                        r = a.length > 0;
                    return d()("c-ArticleModal", "c-Modal--expanded", t.isError && "c-Modal--centered", r && "is-overlapped", n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.match,
                        n = e.article,
                        a = e.className,
                        r = e.fetchArticle,
                        i = e.isFeedbackDisabled,
                        o = e.labels,
                        c = e.messagingEnabled,
                        u = e.openedArticles,
                        l = e.renderTo,
                        d = t.params.id,
                        f = { id: d },
                        b = { article: n, fetchArticle: r, isFeedbackDisabled: i, labels: o, messagingEnabled: c, modalClassName: a, openedArticles: u, payload: f, renderTo: l };
                    return s.a.createElement(v.a, { cardClassName: "c-ArticleModal__Card", className: this.getClassName(), isOpen: !0, onClose: this.handleOnClose, renderTo: l }, s.a.createElement(g.a, b))
                }
            }]), t
        }(c.Component);
    O.defaultProps = { article: {}, fetchArticle: function() {}, match: {}, onOpen: function() {}, openedArticles: [], showEscalation: !1, onClose: function() {} };
    var j = function(e) {
            var t = Object(b.b)(e),
                n = Object(f.x)(e),
                a = Object(f.J)(e),
                r = Object(p.l)(e),
                i = Object(b.f)(e);
            return { article: t, history: e.history, labels: n, messagingEnabled: a, openedArticles: i, showEscalation: r }
        },
        y = { closeAllArticles: h.a, fetchArticle: h.c, fetchSearchResults: h.d };
    t.a = Object(u.b)(j, y)(O)
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return f }), n.d(t, "d", function() { return b }), n.d(t, "e", function() { return p }), n.d(t, "c", function() { return m }), n.d(t, "g", function() { return g }), n.d(t, "a", function() { return v }), n.d(t, "f", function() { return y });
    var a = n(57),
        r = n(58),
        i = (n.n(r), n(264)),
        o = n(40),
        c = n(622),
        s = n(623),
        u = n(624),
        l = n.n(u),
        d = 308,
        f = function(e) { var t = e.target; return "A" === t.nodeName && t.getAttribute("href") },
        b = function(e) {
            var t = f(e);
            t && 0 !== t.indexOf("#") && (e.preventDefault(), window.open(t))
        },
        p = function(e, t) {
            var n = e.target,
                r = h(n);
            if (r || void 0 !== Object(a.a)(t)) try {
                e.preventDefault();
                var c = r.parentNode.getAttribute("href"),
                    s = -1 !== n.className.indexOf(i.b);
                if (c && !s) return window.open(c);
                var u = r.querySelector(".".concat(i.c, " img")),
                    l = -1 !== r.className.indexOf(i.d);
                if (!u || l) return;
                var d = u.getAttribute("src");
                Object(o.b)() ? window.open(d) : t(!0, { imageUrl: d })
            } catch (e) { return }
        },
        h = function(e) { return e.className === i.a ? e : Object(r.getClosestNode)(e, ".".concat(i.a)) },
        m = function(e, t) {
            if (!!h(e.target)) return p(e, t);
            b(e)
        },
        g = function(e) {
            function t() {
                if (this.naturalWidth < d) {
                    var e = Object(r.getClosestNode)(this, ".".concat(i.a));
                    e && e.classList.add(i.d)
                }
                this.removeEventListener("load", t)
            }
            if (!e) return !1;
            var n = e.querySelectorAll("img");
            n && n.length && Array.from(n).forEach(function(e) { return e.addEventListener("load", t) })
        },
        v = function(e) { return e.replace(/<img src=(?:"|')(.+?)(?:"|')(?:.*?)>/g, function(e, t) { return -1 !== e.indexOf("noBdr") ? e : "<span class='".concat(i.a, "' tabindex='0'>\n        <span class='").concat(i.c, '\' aria-label="Image preview. Open larger image in dialog window.">\n          ').concat(e, "\n        </span>\n        <button class='").concat(i.b, "' data-img-src='").concat(t, '\' aria-label="Open image in preview window" aria-hidden="true">\n        ').concat(l.a, "\n        </button>\n      </span>\n    ") }) },
        O = function(e) { return e.replace("<table", '<div class="u-overflow-x"> <table').replace("</table>", "</table> </div>") },
        j = function(e) {
            var t = document.createElement("div");
            t.innerHTML = e;
            var n = t.querySelectorAll("iframe");
            return Array.from(n).forEach(function(e) { Object(s.a)(e) && e.classList.add("is-responsiveFrame") }), t.innerHTML
        },
        y = function(e) { return Object(c.a)(v, j, O)(e) }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return u }), n.d(t, "c", function() { return l });
    var a = n(5),
        r = n(75),
        i = n(11),
        o = Object(r.c)(),
        c = function(e) {
            return e && e.items && e.items.length ? e.items.reduce(function(e, t) {
                var n = t.lastThread;
                if (n) {
                    var a = "user" === n.createdBy.type,
                        r = !1 === n.customerViewed;
                    if (a && r) return e + 1
                }
                return e
            }, 0) : 0
        },
        s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (t.type) {
                case i.Q.REQUEST:
                    return Object(a.a)(Object(a.a)({}, e), {}, { data: { count: 0 }, isLoading: !0 });
                case i.Q.SUCCESS:
                    return Object(a.a)(Object(a.a)({}, e), {}, { data: { count: c(t.data) }, isLoading: !1 });
                case i.Q.FAILURE:
                    return Object(a.a)(Object(a.a)({}, e), {}, { data: { count: 0 }, isLoading: !1 });
                default:
                    return e
            }
        };
    t.a = s;
    var u = function(e) { return e.unreadMessages },
        l = function(e) { var t = e.unreadMessages.data; return t && t.count ? t.count : 0 }
}, function(e, t, n) {
    "use strict";

    function a(e) { return e || "undefined" == typeof navigator || (e = navigator.userAgent), e && e.headers && "string" == typeof e.headers["user-agent"] && (e = e.headers["user-agent"]), "string" == typeof e && e }

    function r(e) { return !!(e = a(e)) && /ipad/i.test(e) }

    function i(e) { return !!(e = a(e)) && /electron/i.test(e) }

    function o(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return void 0 !== c && t ? c : !!(e = a(e)) && (c = !r(e) && !i(e) && (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)))) }
    n.d(t, "b", function() { return r });
    var c = void 0;
    t.a = o
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a });
    var a = ["image/gif", "image/jpeg", "image/png", "image/bmp", "image/x-ms-bmp"]
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a }), n.d(t, "b", function() { return r });
    var a = "askFirst",
        r = "selfService"
}, , , , , , , function(e, t, n) {
    "use strict";
    var a = n(514);
    t.a = a.a
}, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s }), n.d(t, "b", function() { return u });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = n(10),
        s = (n.n(c), "\n  background: none !important;\n  box-shadow: inset 0px -1px ".concat(Object(c.rgba)(Object(c.getColor)("grey.800"), .2), ";\n  height: 20px;\n  opacity: 1;\n  outline: none;\n  overflow: hidden;\n  position: absolute;\n  text-indent: -100%;\n  top: -20px !important;\n  width: 100%;\n\n  &::before,\n  &::after {\n    background: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0) 0%,\n      rgba(0, 0, 0, 0.05) 100%\n    );\n    bottom: 0;\n    content: '';\n    height: 20px;\n    position: absolute;\n    right: 0;\n    width: 100%;\n  }\n\n  &::after {\n    height: 8px;\n  }\n")),
        u = o()("div")(a || (a = Object(r.a)(["\n  background-color: white;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  .BeaconFooter__shadow {\n    ", ";\n  }\n"])), s)
}, , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(619),
        l = function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.name,
                        t = u.a[e];
                    return t ? s.a.createElement("img", { src: "".concat(u.b, "/").concat(t), alt: e }) : null
                }
            }]), t
        }(c.Component);
    t.a = l
}, , , , function(e, t, n) {
    "use strict";
    var a = n(31),
        r = function(e, t) {
            var n = 100 * e.length,
                a = e.reduce(function(e, t) { return "number" !== typeof t.attachmentProgress ? e : t.attachmentProgress + e }, 0);
            return t(parseInt(a / n * 100, 10))
        },
        i = function(e, t, n, i) {
            if (!t || !t.length) return Promise.resolve([]);
            var o = t.map(function(o) {
                return new Promise(function(c, s) {
                    var u = new FormData;
                    u.append("file", o.attachmentFileObject);
                    var l = new XMLHttpRequest;
                    l.open("POST", "".concat(a.a, "/v1/").concat(e, "/attachments")), i && l.setRequestHeader("Authorization", i), l.upload.addEventListener("progress", function(e) { o.attachmentProgress = e.total > 0 ? parseInt(e.loaded / e.total * 100, 10) : 0, r(t, n) }), l.addEventListener("load", function(e) { return l.status >= 300 ? s(new Error("Failed to upload ".concat(o.attachmentFileName, " with status ").concat(l.status))) : c(e.target.getResponseHeader("Resource-ID")) }), l.addEventListener("error", function(e) { return console.log(e), s(new Error("Failed to upload ".concat(o.attachmentFileName))) }), l.send(u)
                })
            });
            return Promise.all(o)
        };
    t.a = i
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return r }), n.d(t, "a", function() { return i });
    var a = n(168),
        r = function(e) {
            var t = e && e.length,
                n = !0 === a.b.test(e);
            return !(!t || !n)
        },
        i = function(e) { var t = e.match(/[a-zA-Z0-9+._-]+@[a-zA-Z0-9+._-]+\.[a-zA-Z0-9_-]+/i); return !!t && t[0] }
}, , function(e, t, n) {
    "use strict";
    var a = function(e) {
        return new Promise(function(t, n) {
            e && "string" === typeof e || n(new Error("src provided is invalid."));
            var a = new Image;
            a.src = e, a.addEventListener("error", n), a.addEventListener("load", function() { return t(a) })
        })
    };
    t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a });
    var a = function() {}
}, function(e, t, n) { n(335), e.exports = n(366) }, function(e, t, n) { "undefined" === typeof Promise && (n(336).enable(), window.Promise = n(338)), Object.assign = n(100), "undefined" === typeof Object.values && (Object.values = n(339)), "undefined" === typeof Array.find && n(345).shim(), "undefined" === typeof Array.findIndex && n(361).shim(), "undefined" === typeof Array.from && (Array.from = n(363)), "undefined" === typeof String.includes && n(365), window.requestAnimationFrame || (window.requestAnimationFrame = function(e) { setTimeout(e, 0) }) }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), n.d(t, "main", function() { return s });
    var a = n(22),
        r = n(371),
        i = (n.n(r), n(375)),
        o = n(16),
        c = n(279),
        s = function() {
            var e = window.Beacon;
            if (!e || !e.readyQueue) return o.a.error("There's been a problem initializing Beacon. Are you using the right embed script?");
            var t = e.readyQueue.filter(function(e) { return "init" === e.method }),
                n = t[0];
            return e.readyQueue = e.readyQueue.filter(function(e) { return "init" !== e.method && "destroy" !== e.method }), n ? Object(c.a)(i.a, n.options) : Object(c.c)(i.a, Object(a.a)(e.readyQueue))
        };
    s()
}, , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(59),
        d = n(448),
        f = function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.events,
                        n = e.initMessages,
                        a = e.readyQueue,
                        r = e.store;
                    a && a.length > 0 && a.forEach(function(e) { return window.Beacon(e.method, e.options, e.data) });
                    var i = window.location.href,
                        o = document.title;
                    r.dispatch(Object(l.f)({ url: i, title: o })), "function" === typeof n && n(), setTimeout(function() { return t.emit("ready") }, 0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.store,
                        n = e.history,
                        a = e.events;
                    return s.a.createElement(u.a, { store: t }, s.a.createElement(d.a, { events: a, history: n }))
                }
            }]), t
        }(c.Component);
    t.a = f
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(292),
        s = n.n(c),
        u = n(0),
        l = n.n(u),
        d = n(116),
        f = n.n(d),
        b = n(66),
        p = (n.n(b), n(16)),
        h = { delay: 0, fetchOnce: !1, showLoadingWhileRefetching: !0, renderError: function() { return null }, renderLoading: function() { return l.a.createElement(s.a, { align: "center" }) } },
        m = function(e) { if (e) { var t = Date.now(); return function(n) { var a = Date.now() - t; return a >= e ? n() : setTimeout(n, e - a) } } },
        g = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.state = {}, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "UNSAFE_componentWillMount",
                value: function() {
                    var e = this.props,
                        t = e.resource,
                        n = e.payload,
                        a = e.fetchOnce;
                    t.data && !0 === a || t.data && n && f()(n, t.payload) || this.fetchResource(n)
                }
            }, {
                key: "UNSAFE_componentWillReceiveProps",
                value: function(e) {
                    var t = this.props,
                        n = t.payload,
                        a = t.fetchOnce,
                        r = e.payload,
                        i = e.fetchOnce;
                    if (a && !i) return this.fetchResource(r);
                    "undefined" !== typeof r && (f()(n, r) || this.fetchResource(r))
                }
            }, { key: "componentWillUnmount", value: function() { this.state.cancelToken && this.state.cancelToken.cancel() } }, {
                key: "fetchResource",
                value: function(e) {
                    this.state.cancelToken && this.state.cancelToken.cancel();
                    var t = b.CancelToken.source(),
                        n = this.props,
                        a = n.delay,
                        r = n.fetch;
                    this.setState({ cancelToken: t });
                    var i = r(e, t.token, m(a));
                    return i && i.catch(function(e) { return p.a.error("Error fetching resource", e) })
                }
            }, {
                key: "retry",
                value: function() {
                    var e = this.props.payload;
                    this.fetchResource(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.resource,
                        n = e.renderError,
                        a = e.renderLoading,
                        r = e.children,
                        i = e.showLoadingWhileRefetching,
                        o = t.isError,
                        c = t.isLoading;
                    return o ? n(this.retry.bind(this)) : !t.data || c && i ? a() : r
                }
            }]), t
        }(u.Component);
    g.defaultProps = h, t.a = g
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(1),
        l = n.n(u),
        d = n(17),
        f = n(40),
        b = n(75),
        p = n(16),
        h = n(103),
        m = n(477),
        g = n(228),
        v = n(684),
        O = n(685),
        j = n(699),
        y = n(703),
        _ = n(707),
        A = n(104),
        C = n(72),
        E = n(112),
        w = n(24),
        x = n(95),
        S = n(35),
        T = n(12),
        k = n(111),
        I = n(54),
        M = n(163),
        N = n(41),
        L = n(26),
        P = [A.a.INLINE, A.a.MODAL, A.a.SIDEBAR],
        F = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.scrollPosition = 0, e.toggleBeacon = function() { e.props.toggleBeacon(!e.props.status.isOpened) }, e.fetchCustomFields = function() { e.props.fetchCustomFields() }, e.onBeaconOpen = function() {
                    var t = e.props.events;
                    Object(f.b)() && (e.scrollPosition = window.pageYOffset || document.documentElement.scrollTop, document.body.style.left = 0, document.body.style.position = "fixed", document.body.style.right = 0), t.emit("open")
                }, e.onBeaconClose = function() {
                    var t = e.props.events;
                    Object(f.b)() && (document.documentElement.scrollTop = document.body.scrollTop = e.scrollPosition, document.body.style.left = "", document.body.style.position = "", document.body.style.right = ""), t.emit("close")
                }, e.onWindowClick = function(t) {
                    var n = t.target;
                    if (!("A" !== n.nodeName && "BUTTON" !== n.nodeName || t.ctrlKey || t.metaKey)) {
                        var a = n.getAttribute("data-beacon-article");
                        if (a) return e.openArticle(a), void t.preventDefault();
                        P.forEach(function(a) { var r = n.getAttribute("data-beacon-article-".concat(a)); if (r) return e.openInlineArticle(r, a, { target: n }), void t.preventDefault() })
                    }
                }, e.onFabClick = function() {
                    var t = e.props,
                        n = t.hasPreviewMessage,
                        a = t.isMessagePreviewActionsEnabled;
                    n && !a || e.toggleBeacon()
                }, e.setContainerFrameNodeRef = function(t) { e.containerFrame = t }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.avatars,
                        n = e.customFields,
                        a = e.config,
                        r = e.fetchAvatars;
                    if (!!a.messagingEnabled) {
                        var i = a.messaging,
                            o = i.contactForm;
                        Object(b.g)(t) && r(), !0 === o.customFieldsEnabled && Object(b.g)(n) && this.fetchCustomFields()
                    }
                    window.addEventListener("click", this.onWindowClick, !0)
                }
            }, { key: "componentWillUnmount", value: function() { window.removeEventListener("click", this.onWindowClick, !0) } }, { key: "UNSAFE_componentWillReceiveProps", value: function() { if (!0 === this.props.config.isError) return p.a.error("\n        There has been an error loading the Beacon config. This could mean that the Beacon\n        doesn't exist anymore, or that the beaconId is not correct. If you have deleted this\n        Beacon in Help Scout, please remove the embed code from your website.\n      "), null } }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.status,
                        n = e.status;
                    t.isOpened && !n.isOpened && this.onBeaconOpen(), !t.isOpened && n.isOpened && this.onBeaconClose()
                }
            }, { key: "openArticle", value: function(e) { var t = this.context.store; return t && Object(h.a)({ store: t }, e) } }, { key: "openInlineArticle", value: function(e, t, n) { return (0, this.props.setInlineArticle)(e, t, n) } }, {
                key: "renderGrandientDiv",
                value: function() {
                    var e = this.props,
                        t = e.config,
                        n = e.status,
                        a = t.display,
                        r = t.positionAbsolute,
                        i = a.position,
                        o = a.zIndex,
                        c = n.isContainerMounted,
                        u = n.isOpened;
                    return s.a.createElement(v.a, { position: i, positionAbsolute: r, visible: u && c, zIndex: o })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.brandColor,
                        n = e.config,
                        a = e.history,
                        r = e.status,
                        i = e.chat,
                        o = e.chatActiveAgent,
                        c = e.unreadMessageCount;
                    if (!0 === n.isError) return null;
                    var u = n.labels;
                    return s.a.createElement(m.a, { brandColor: t }, s.a.createElement("div", { className: "Beacon" }, this.renderGrandientDiv(), s.a.createElement(g.b, { ref: this.setContainerFrameNodeRef, history: a, config: n, status: r, toggleBeacon: this.toggleBeacon }), s.a.createElement(O.a, { chat: i, chatActiveAgent: o, config: n, labels: u, onClick: this.onFabClick, status: r, unreadMessageCount: c }), s.a.createElement(j.a, null), s.a.createElement(_.a, null), s.a.createElement(y.a, null)))
                }
            }]), t
        }(c.Component);
    F.contextTypes = { store: l.a.object };
    var B = function(e, t) {
            var n = e.chat,
                a = e.config,
                r = e.demo,
                i = e.status,
                o = Object(M.c)(e),
                c = Object(T.g)(e),
                s = Object(S.e)(e),
                u = Object(N.b)(e),
                l = Object(M.e)(e),
                d = Object(S.c)(e),
                f = null !== Object(I.e)(e),
                b = Object(M.f)(e),
                p = Object(M.g)(e),
                h = Object(M.d)(e),
                m = Object(S.u)(e),
                g = Object(L.e)(e);
            return { avatars: o, brandColor: c, config: a, chat: n, chatActiveAgent: s, conversationCount: u, customFields: l, demo: r, hasAvailableAgents: d, hasPreviewMessage: f, isMessagePreviewActionsEnabled: Object(k.d)(e), message: b, messageErrors: p, showChatAvailabilityChangeInfo: h, status: i, unreadMessageCount: m, user: g }
        },
        R = { clearMessageErrors: E.b, fetchAvatars: E.c, fetchCustomFields: E.d, setInlineArticle: w.b, syncCustomer: C.c, toggleBeacon: w.c, updateChatAvailabilityInfo: E.h, updateCustomField: E.i, updateMessage: E.j, updateUser: x.c };
    t.a = Object(d.b)(B, R)(F)
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return s }), n.d(t, "c", function() { return d }), n.d(t, "a", function() { return b }), n.d(t, "d", function() { return m });
    var a = n(22),
        r = n(49),
        i = n(164),
        o = n(107),
        c = n(97),
        s = (n.n(c), function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.reduce(function(e, n) { return f(e, n, t) }, [])
        }),
        u = function(e) { e.type === r.f.message && e.author.type && e.author.type !== r.a.system && (e.author.hideName = !0) },
        l = function(e, t) { e.author && e.author.type === r.a.system && (e.author.displayName = Object(o.c)("chatbotName", i.a.chatbotName, t)) },
        d = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).sort(function(e, t) {
                var n = new Date(e.createdAt),
                    a = new Date(t.createdAt);
                return n > a ? 1 : n < a ? -1 : 0
            })
        },
        f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e || !t) return [];
            if (u(t), l(t, n), p(e, t)) return [].concat(Object(a.a)(e), [h(t)]);
            var r = Object(a.a)(e),
                i = r.pop();
            return i.messages = [].concat(Object(a.a)(i.messages), [t]), [].concat(Object(a.a)(r), [i])
        },
        b = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = t.id,
                r = t.author,
                i = t.rawBody,
                o = r ? r.displayName : "",
                c = Object(a.a)(e);
            return c.push({ id: n, body: i, from: o }), c
        },
        p = function(e, t) {
            if (!e || !t) return !1;
            var n = Object(c.last)(e);
            if (!n) return !0;
            var a = t.author,
                i = t.type;
            return a && a.id === r.e && n && n.author && null === n.author.id && (a.id = null), !n || i === r.f.action || n.type === r.f.action || n.author.id !== a.id
        },
        h = function(e) { return { author: e.author, id: e.id, type: e.type, messages: [e] } },
        m = function(e) { var t = e.findIndex(function(e) { return e.type === r.f.indicator }); return -1 !== t && (e = e.filter(function(e, n) { return n !== t })), e }
}, function(e, t, n) {
    "use strict";
    t.a = { ask: "Ask", history: "History", sendAMessage: "Send a message", messageButtonLabel: "Email", howCanWeHelp: "How can we help?", firstAFewQuestions: "Let's begin with a few questions", nameLabel: "Name", subjectLabel: "Subject", emailLabel: "Email address", messageLabel: "How can we help?", messageSubmitLabel: "Send a message", mayNotBeEmpty: "May not be empty", emailValidationLabel: "Please use a valid email address", defaultMessageErrorText: "There was a problem sending your message. Please try again in a moment.", weAreOnIt: "We're on it!", messageConfirmationText: "You'll receive an email reply within a few hours.", viewAndUpdateMessage: "You can view and update your message in", answer: "Answers", noTimeToWaitAround: "No time to wait around? We usually respond within a few hours", wereHereToHelp: "Start a conversation", whatMethodWorks: "What channel do you prefer?" }
}, function(e, t, n) {
    "use strict";
    t.a = { attachmentSizeErrorText: "Attachments may be no larger than 10MB", attachmentErrorText: "There was a problem uploading your attachment. Please try again in a moment." }
}, function(e, t, n) {
    "use strict";
    t.a = { beaconButtonClose: "Close", beaconButtonChatMinimize: "Minimize chat", beaconButtonChatOpen: "Open chat" }
}, function(e, t, n) {
    "use strict";
    t.a = { backButton: "Back", chatButtonLabel: "Chat", chatButtonDescription: "Weâ€™re online right now, talk with our team in real-time", chatHeadingTitle: "Chat with our team", chatHeadingLabel: "Hang on in there", chatHeadingSublabel: "We'll be with you soon", chatConnected: "Connected to {{ name }}", chatEndCalloutHeading: "All done!", chatEndCalloutMessage: "A copy of this conversation will land in your inbox shortly.", chatEndCalloutLink: "Return home", chatEndUnassignedCalloutHeading: "Sorry about that", chatEndUnassignedCalloutMessage: "It looks like nobody made it to your chat. We'll send you an email response as soon as possible.", chatEndWaitingCustomerHeading: "Sorry about that", chatEndWaitingCustomerMessage: "Your question has been added to our email queue and we'll get back to you shortly.", chatAvailabilityChangeMessage: "Our team's availability has changed and there's no longer anyone available to chat. Send us a message instead and we'll get back to you.", ending: "Ending...", endChat: "End chat", chatEnded: "{{ name }} ended the chat", chatRatingLabel: "How would you rate {{ name }}?", chatRatingCommentsPlaceholder: "Any additional feedback?", chatRatingButton: "Rate" }
}, function(e, t, n) {
    "use strict";
    t.a = { chatbotName: "Help Bot", chatbotGreet: "Hi there! You can begin by asking your question below. Someone will be with you shortly.", chatbotPromptEmail: "Got it. Real quick, what's your email address? Weâ€™ll use it for any follow-up messages.", chatbotConfirmationMessage: "Thanks! Someone from our team will jump into the chat soon.", chatbotInvalidEmailMessage: "Looks like you've entered an invalid email address. Want to try again?", chatbotInactivityPrompt: "Since the chat has gone idle, I'll end this chat in a few minutes.", chatbotGenericErrorMessage: "Something went wrong sending your message, please try again in a few minutes.", chatbotAgentDisconnectedMessage: "{{ name }} has disconnected from the chat. Itâ€™s possible they lost their internet connection, so Iâ€™m looking for someone else to take over. Sorry for the delay!" }
}, function(e, t, n) {
    "use strict";
    t.a = { cantFindAnswer: "Can't find an answer?", getInTouch: "Get in Touch", nothingFound: "Hmmâ€¦", docsSearchEmptyText: "We couldn't find any articles that match your question.", tryBroaderTerm: "Try searching a broader term, or", searchLabel: "What can we help you with?", relatedArticles: "Related articles", suggestedForYou: "Instant Answers" }
}, function(e, t, n) {
    "use strict";
    t.a = { escalationSearchText: "Browse our help docs for an answer to your question", escalationSearchTitle: "Keep searching", escalationTalkText: "Talk with a friendly member of our support team", escalationTalkTitle: "Talk to us", escalationQuestionFeedback: "Did this answer your question?", escalationQuestionFeedbackYes: "Yes", escalationQuestionFeedbackNo: "No", escalationThanksFeedback: "Thanks for the feedback", escalationWhatNext: "What next?" }
}, function(e, t, n) {
    "use strict";
    t.a = { previousMessages: "Previous Conversations", previousMessageErrorText: "There was a problem retrieving this message. Please double-check your Internet connection and try again.", justNow: "Just Now", minutePeriod: "{{ count }}m", hourPeriod: "{{ count }}h", dayPeriod: "{{ count }}d", lastUpdated: "Last updated", you: "You", received: "Received", waitingForAnAnswer: "Waiting for an answer" }
}, function(e, t, n) {
    "use strict";
    t.a = { tryAgain: "Try again", docsArticleErrorText: "There was a problem retrieving this article. Please double-check your Internet connection and try again." }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a });
    var a = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { page: 0, lastPage: 0 }; return e.page < e.lastPage }
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = function(e, t) { return e ? Object(a.a)(Object(a.a)({}, e), {}, { agent: t }) : { agent: t } };
    t.a = r
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a });
    var a = { file: "file", image: "image" }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return o });
    var a = n(60),
        r = n(31),
        i = function(e) { return e && e.total > 0 ? Math.round(e.loaded / e.total * 100) : 0 },
        o = function(e, t, n, o) {
            var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {},
                s = new FormData;
            s.append("attachments[]", t);
            var u = { onUploadProgress: function(e) { c(i(e)) } };
            return Object(a.a)({ deviceId: n, header: o }).post("".concat(r.c, "/v1/chats/").concat(e, "/attachments"), s, u).then(function(e) { var t = e.data; if (t && t.id) return t; throw new Error("Invalid response") })
        }
}, function(e, t, n) {
    "use strict";
    var a = n(57);
    t.a = function(e, t) {
        var n = {};
        return t && t.items && Array.isArray(t.items) && t.items.forEach(function(e) { n[e.id] = e }), {
            items: e.map(function(e) {
                if ("object" === Object(a.a)(e)) {
                    var t = e.text,
                        r = e.url;
                    return t && r ? { type: "link", suggestion: { text: t, url: r } } : null
                }
                var i = e;
                return n[i] ? { type: "article", suggestion: n[i] } : null
            }).filter(function(e) { return !!e })
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(478);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(479),
        s = n.n(c),
        u = n(0),
        l = n.n(u),
        d = n(14),
        f = (n.n(d), n(10)),
        b = (n.n(f), function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.brandColor,
                        n = e.children,
                        a = { brandColor: Object(f.makeBrandColors)(t) };
                    return l.a.createElement(s.a.Provider, { scope: "hsds-beacon" }, l.a.createElement(d.ThemeProvider, { theme: a }, n))
                }
            }]), t
        }(u.PureComponent));
    b.defaultProps = { brandColor: "#7E80E7" }, t.a = b
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(24),
        d = n(76),
        f = n(498),
        b = n.n(f),
        p = function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.onMount;
                    return s.a.createElement(d.a, { "aria-label": "Beacon content frame", contentDidMount: n, extraHead: '\n      <style>\n        @import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");\n        @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");\n        @import url("https://fonts.googleapis.com/css?family=Barlow:500&display=swap");\n      </style>\n      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    ', frameCss: b.a }, t)
                }
            }]), t
        }(c.PureComponent);
    p.defaultProps = { onMount: function() {} };
    var h = { onMount: function() { return Object(l.d)(!0) } };
    t.a = Object(u.b)(null, h)(p)
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(18),
        i = n(6),
        o = n(7),
        c = n(8),
        s = n(9),
        u = n(0),
        l = n.n(u),
        d = n(156),
        f = n.n(d),
        b = n(496),
        p = n.n(b),
        h = ["children", "extraHead", "frameCss", "frameId", "frameStyles", "noScroll"],
        m = function(e) {
            function t() {
                var e;
                Object(i.a)(this, t);
                for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(r)), e._isMounted = !1, e.handleContentDidMount = function() { e.props.contentDidMount() }, e.safeSetState = function(t) { e._isMounted && e.setState(t) }, e
            }
            Object(c.a)(t, e);
            var n = Object(s.a)(t);
            return Object(o.a)(t, [{ key: "componentDidMount", value: function() { this._isMounted = !0 } }, { key: "componentWillUnmount", value: function() { this._isMounted = !1 } }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.extraHead,
                        i = e.frameCss,
                        o = e.frameId,
                        c = e.frameStyles,
                        s = (e.noScroll, Object(r.a)(e, h)),
                        u = "\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <style>".concat(i, "</style>\n          <style>").concat(p.a, "</style>\n          ").concat(n, '\n        </head>\n        <body id="beacon-container-body">\n          <div id="beacon-container"></div>\n        </body>\n      </html>\n    '),
                        d = Object(a.a)(Object(a.a)({}, s), {}, { id: o || "", style: c, contentDidMount: this.handleContentDidMount, initialContent: u });
                    return l.a.createElement(f.a, d, t)
                }
            }]), t
        }(u.PureComponent);
    m.defaultProps = { contentDidMount: function() {}, extraHead: "" }, t.a = m
}, , , , function(e, t, n) {
    var a = n(497);
    e.exports = "string" === typeof a ? a : a.toString()
}, function(e, t, n) { t = e.exports = n(52)(void 0), t.push([e.i, '#beacon-container{--BlueConfigGlobalFontFamilyMono:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;--HSDSGlobalFontFamily:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--HSDSGlobalFontFamily);font-size:14px;line-height:1.5}#beacon-container-body{margin:0;overflow:hidden}#beacon-container *{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}#beacon-container a{text-decoration:none}#beacon-container ::-webkit-scrollbar-track{background-color:transparent}#beacon-container ::-webkit-scrollbar{width:12px}#beacon-container ::-webkit-scrollbar-track{background:rgba(0,0,0,.04);border-radius:8px}#beacon-container ::-webkit-scrollbar-thumb{border:2px solid transparent;background-clip:padding-box;border-radius:7px;background-color:rgba(0,0,0,.1)}#beacon-container ::-webkit-scrollbar-thumb:hover{background-color:rgba(0,0,0,.6)}#beacon-container :hover::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.4)}#beacon-container :hover::-webkit-scrollbar-thumb:hover{background-color:rgba(0,0,0,.6)}#beacon-container *{scrollbar-color:rgba(0,0,0,.4) transparent}', ""]) }, function(e, t, n) {
    var a = n(499);
    e.exports = "string" === typeof a ? a : a.toString()
}, function(e, t, n) { t = e.exports = n(52)(void 0), t.i(n(500), ""), t.i(n(501), ""), t.push([e.i, ".c-AddReplyOverlay .c-Scrollable__content{padding:14px}.c-AddReplyOverlay .c-Modal__Card-container.ax-scale{-webkit-transform:scale(.95);-ms-transform:scale(.95);transform:scale(.95)}.c-AddReplyOverlay .c-Modal__Card-container.ax-scale.ax-entered{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.c-Alert{border-radius:3px;-webkit-box-shadow:none!important;box-shadow:none!important;font-size:12px;margin:0 0 10px;padding:8px 12px}.c-Alert__block{line-height:1.6;min-height:0;padding:2px 0}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:20px -20px;position:relative;max-width:calc(100% + 40px)}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview .noBdr+button{display:none}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview dl,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ol,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ul{display:block;margin-left:0;margin-right:0;width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview dl .c-Content__imagePreview__image img,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ol .c-Content__imagePreview__image img,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ul .c-Content__imagePreview__image img{max-width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview:active .c-Content__imagePreview__button,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview:focus .c-Content__imagePreview__button,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview:hover .c-Content__imagePreview__button{opacity:1;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px)}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__image{width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__image img{display:block;height:auto;margin:0;max-width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button{border-radius:36px;border:0;bottom:7px;-webkit-box-shadow:inset 0 0 0 99999px transparent,0 4px 7px rgba(0,0,0,.1);box-shadow:inset 0 0 0 99999px transparent,0 4px 7px rgba(0,0,0,.1);color:#fff;height:36px;left:12px;opacity:0;padding:7px;position:absolute;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1);-o-transition:all .5s cubic-bezier(.23,1,.32,1);transition:all .5s cubic-bezier(.23,1,.32,1);width:36px;will-change:opacity}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:hover{color:#fff}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:active,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:focus,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:hover{-webkit-box-shadow:inset 0 0 0 99999px rgba(0,0,0,.1),0 4px 7px rgba(0,0,0,.1);box-shadow:inset 0 0 0 99999px rgba(0,0,0,.1),0 4px 7px rgba(0,0,0,.1)}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:focus{outline:none}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button svg{pointer-events:none}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview--no-preview{cursor:default}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview--no-preview .c-Content__imagePreview__button{display:none}.c-AskChatMessageList__message.is-from+.c-AskChatMessageList__message.is-typing{margin-top:-12px}.c-AskChatMessageList__message.is-author-hidden .c-Message__from{display:none}.c-AskChatMessageList .c-AskChatMessageList__avatar--white-theme{color:#394956}.c-AskContactForm__content,.c-AskCustomFields{padding:10px 19px}.c-AskFieldGroup{margin-bottom:10px}.c-AskFieldGroup.is-footer{margin-top:10px;margin-bottom:0}.c-AttachmentLink{display:inline-block}.c-AttachmentLink__icon{margin-left:-2px;margin-right:4px;position:relative;top:1px}.c-AttachmentLink__filename{padding-right:4px}.c-Blankslate{padding:50px 24px;text-align:center}.c-Blankslate__illoWrapper{height:86px;margin:10px auto;width:86px}.c-Blankslate__icon{margin:auto}.c-Blankslate__header{margin-bottom:5px}.c-Blankslate.is-maxHeight{height:100%}.c-Card{margin-bottom:4px}.c-Card h4{line-height:1.5;margin-bottom:5px}.c-Card p{color:#4e6579;margin-bottom:2px}.c-Card .c-VideoEmbed{margin-left:-8px;margin-right:-8px}.c-Card:hover{color:inherit;text-decoration:none}.c-ConversationModal{padding:10px 5px 5px}.c-Conversation{padding:8px 4px 12px}.c-Conversation__heading{font-family:Roboto,Helvetica,sans-serif;margin-bottom:10px;margin-right:12px}.c-Conversation__footer.c-Toolbar{border-color:transparent;padding:20px}.c-ErrorState{padding:30px;height:100%;min-height:0}.c-ErrorState__content{color:#72808e;text-align:center}.c-ErrorState__customIlloWrapper{height:86px;margin:10px auto;width:86px}.c-ErrorState__illoWrapper{margin-bottom:5px}.c-ErrorState .c-Link{margin-top:8px}.c-FileUploader{padding:0 2px}.c-FileUploader__progressWrapper{padding:10px 0;text-align:center}.c-FileUploader__progressBarWrapper{margin-top:10px}.c-FileUploader__listItem:not(:first-child){margin-top:6px}.c-Icon.is-iconName-chat .c-Icon__icon{position:relative;top:1px}.c-Input.is-multiline{-webkit-backface-visibility:hidden;backface-visibility:hidden}.c-ResultsEmptyState{padding:40px 36px;height:calc(100vh - 102px)}.c-ResultsEmptyState__animate{height:100%}.c-Scrollable__fader{pointer-events:none}.c-StatusBadge__badge{font-weight:500}.c-ThreadListItem{border-top:1px dotted #e3e8eb;margin-top:20px;padding-top:20px}.c-ThreadListItem:first-child{border-top:none}.c-ThreadListItem.is-firstThread{border-top-color:transparent;margin-top:0;padding-top:10px}.c-ThreadListItem__header{margin-bottom:10px}.c-ThreadListItem__avatar{margin-left:-2px;margin-right:4px}.c-ThreadListItem__author{color:#394956!important;font-weight:700}.c-ThreadListItem__bodyTextContent{word-break:break-word}.c-ThreadListItem img{max-width:100%}.c-ThreadListItem .c-Content__imagePreview{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:20px -20px;position:relative;max-width:calc(100% + 40px)}.c-ThreadListItem .c-Content__imagePreview .noBdr+button{display:none}.c-ThreadListItem .c-Content__imagePreview dl,.c-ThreadListItem .c-Content__imagePreview ol,.c-ThreadListItem .c-Content__imagePreview ul{display:block;margin-left:0;margin-right:0;width:100%}.c-ThreadListItem .c-Content__imagePreview dl .c-Content__imagePreview__image img,.c-ThreadListItem .c-Content__imagePreview ol .c-Content__imagePreview__image img,.c-ThreadListItem .c-Content__imagePreview ul .c-Content__imagePreview__image img{max-width:100%}.c-ThreadListItem .c-Content__imagePreview:active .c-Content__imagePreview__button,.c-ThreadListItem .c-Content__imagePreview:focus .c-Content__imagePreview__button,.c-ThreadListItem .c-Content__imagePreview:hover .c-Content__imagePreview__button{opacity:1;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px)}.c-ThreadListItem .c-Content__imagePreview__image{width:100%}.c-ThreadListItem .c-Content__imagePreview__image img{display:block;height:auto;margin:0}.c-ThreadListItem .c-Content__imagePreview__button{border-radius:36px;border:0;bottom:7px;-webkit-box-shadow:inset 0 0 0 99999px transparent,0 4px 7px rgba(0,0,0,.1);box-shadow:inset 0 0 0 99999px transparent,0 4px 7px rgba(0,0,0,.1);color:#fff;height:36px;left:12px;opacity:0;padding:7px;position:absolute;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1);-o-transition:all .5s cubic-bezier(.23,1,.32,1);transition:all .5s cubic-bezier(.23,1,.32,1);width:36px;will-change:opacity}.c-ThreadListItem .c-Content__imagePreview__button:hover{color:#fff}.c-ThreadListItem .c-Content__imagePreview__button:active,.c-ThreadListItem .c-Content__imagePreview__button:focus,.c-ThreadListItem .c-Content__imagePreview__button:hover{-webkit-box-shadow:inset 0 0 0 99999px rgba(0,0,0,.1),0 4px 7px rgba(0,0,0,.1);box-shadow:inset 0 0 0 99999px rgba(0,0,0,.1),0 4px 7px rgba(0,0,0,.1)}.c-ThreadListItem .c-Content__imagePreview__button:focus{outline:none}.c-ThreadListItem .c-Content__imagePreview__button svg{pointer-events:none}.c-ThreadListItem .c-Content__imagePreview--no-preview{cursor:default}.c-ThreadListItem .c-Content__imagePreview--no-preview .c-Content__imagePreview__button{display:none}.c-ThreadListItem .c-Content__imagePreview{margin-left:0;margin-right:0;width:100%}.c-ThreadListItem .c-Content__imagePreview__image img{max-width:100%}html{overflow:hidden;width:100%}body,html{height:100%;margin:0;padding:0}", ""]) }, , , function(e, t, n) {
    "use strict";
    var a, r, i, o = n(15),
        c = n(159),
        s = n.n(c),
        u = n(67),
        l = n.n(u),
        d = n(14),
        f = n.n(d),
        b = n(0),
        p = n.n(b),
        h = n(10),
        m = (n.n(h), f()("div")(a || (a = Object(o.a)(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n"])), Object(h.getColor)("grey.200"))),
        g = f()("div")(r || (r = Object(o.a)(["\n  height: 48px;\n  ", "\n"])), function(e) { return "background-color: ".concat(Object(h.getThemeBrandProp)(e, "brandColor"), ";") }),
        v = f()("div")(i || (i = Object(o.a)(["\n  flex: 1;\n"])));
    t.a = function() { return p.a.createElement(m, null, p.a.createElement(g, null), p.a.createElement(v, null, p.a.createElement(l.a, null, p.a.createElement(s.a, null)))) }
}, , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(21),
        d = n.n(l),
        f = n(12),
        b = n(35),
        p = n(512),
        h = n(40),
        m = n(513),
        g = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.isMobile = Object(h.b)(), e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "getClassNames",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.isDisplayLeft,
                        a = e.isManual,
                        r = e.isPositionAbsolute;
                    return d()("BeaconContainer", n ? "is-configDisplayLeft" : "is-configDisplayRight", r && "is-positionAbsolute", a && "is-manual", this.isMobile && "is-mobile", t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.isManual,
                        a = e.isVisible,
                        r = e.offsetBottom,
                        i = e.withOpenAnimationDelay,
                        o = e.zIndex;
                    return s.a.createElement(m.a, { className: this.getClassNames(), isManual: n, isVisible: a, offsetBottom: r, "data-css-with-delay": i, zIndex: o }, t)
                }
            }]), t
        }(c.PureComponent);
    g.defaultProps = { isDisplayLeft: !1, isManual: !1, isVisible: !1, offsetBottom: 0, withOpenAnimationDelay: !1, zIndex: 1e3 };
    var v = function(e) {
        var t = Object(f.j)(e),
            n = "".concat(Object(p.a)(t), "px");
        return { isDisplayLeft: Object(f.i)(e), isManual: Object(f.k)(e), isPositionAbsolute: Object(f.t)(e), offsetBottom: n, withOpenAnimationDelay: Object(b.l)(e), zIndex: Object(f.E)(e) }
    };
    t.a = Object(u.b)(v)(g)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return i });
    var a = n(99),
        r = n(62),
        i = function(e) {
            switch (e) {
                case r.g:
                    return a.a - (r.b - r.d);
                case r.e:
                    return a.a - (r.b - r.c);
                case r.f:
                    return a.f;
                default:
                    return a.a
            }
        }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.isVisible,
            n = e.offsetBottom,
            a = e.zIndex;
        return "\n    bottom: ".concat(n || u.offsetBottom, ";\n    box-shadow: ").concat(u.boxShadow, ";\n    display: ").concat(t ? "block" : "none", ";\n    z-index: ").concat(a || u.zIndex, ";\n  ")
    }

    function r(e) {
        var t = e.isManual,
            n = e.offsetBottom,
            a = u.offsetTop,
            r = n || u.offsetBottom,
            i = t ? u.manualOffsetTop : "0px";
        return "\n    height: calc(100% - (".concat(r, " - ").concat(a, " + ").concat(i, "));\n  ")
    }
    n.d(t, "a", function() { return l });
    var i, o = n(15),
        c = n(14),
        s = n.n(c),
        u = { boxShadow: "\n    0 0 0 1px rgba(0, 0, 0, .05),\n    0 5px 30px 0 rgba(0, 0, 0, .15),\n    0 3px 3px 0 rgba(0, 0, 0, .05)\n  ", mqMaxHeight: "740px", mqMaxWidth: "450px", offsetBottom: "115px", offsetSide: "40px", offsetTop: "20px", manualOffsetTop: "28px", mobileOffsetTop: "32px", mobileOffsetBottom: "90px", zIndex: "1050" },
        l = s()("div")(i || (i = Object(o.a)(["\n  bottom: ", ";\n  right: ", ";\n  position: fixed;\n  width: 350px;\n  min-height: 250px;\n  max-height: 650px;\n  border-radius: 4px;\n  overflow: visible;\n  opacity: 1;\n  display: none;\n\n  ", ";\n  ", ";\n\n  iframe {\n    background: transparent !important;\n    border: 0 !important;\n    border-radius: 4px !important;\n    bottom: 0 !important;\n    height: 100% !important;\n    left: 0 !important;\n    position: absolute !important;\n    right: 0 !important;\n    top: 0 !important;\n    width: 100% !important;\n  }\n\n  &.is-mobile iframe {\n    border-radius: 0px !important;\n  }\n\n  &.BeaconContainer-enter {\n    display: block;\n    opacity: 0;\n    transform: translateY(20px);\n  }\n\n  &.BeaconContainer-enter-active {\n    display: block;\n    opacity: 1;\n    transform: translateY(0);\n    transition: opacity 250ms ease-out, transform 250ms ease-out;\n  }\n\n  &.BeaconContainer-enter-done {\n    display: block;\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  &.BeaconContainer-exit {\n    display: block;\n    opacity: 1;\n  }\n\n  &.BeaconContainer-exit-active {\n    display: block;\n    opacity: 0;\n    transform: translateY(20px);\n    transition: opacity 250ms ease-out, transform 250ms ease-out;\n  }\n\n  &.BeaconContainer-exit-done {\n    display: none;\n  }\n\n  @media (max-height: ", ") {\n    right: calc(", " - 20px);\n    ", ";\n  }\n\n  @media (max-width: ", ") {\n    border-radius: 0;\n    height: calc(100% - ", ");\n    left: 0;\n    max-height: 100%;\n    right: 0;\n    top: 0;\n    width: 100%;\n  }\n\n  @media (max-width: ", ") and (min-height: ", ") {\n    height: calc(100% - (", " - ", "));\n  }\n\n  &.is-configDisplayLeft {\n    left: ", ";\n    right: initial;\n\n    @media (max-height: ", ") {\n      left: calc(", " - 20px);\n    }\n  }\n\n  &.is-positionAbsolute {\n    position: absolute;\n  }\n\n  &.is-mobile {\n    border-radius: 0;\n    bottom: 0;\n    height: 100%;\n    height: calc(100% - ", ");\n    left: 0;\n    max-height: 100%;\n    right: 0;\n    top: 0;\n    top: ", ";\n    width: 100%;\n  }\n\n  &[data-css-with-delay='true'] {\n    &.BeaconContainer-enter-active {\n      display: block;\n      opacity: 0;\n      transition: none;\n      transform: translateY(20px);\n    }\n\n    &.BeaconContainer-enter-done {\n      display: block;\n      opacity: 1;\n      transition: opacity 250ms ease-out, transform 250ms ease-out;\n      transform: translateY(0);\n    }\n  }\n"])), u.offsetBottom, u.offsetSide, a, r, u.mqMaxHeight, u.offsetSide, function(e) { return "\n      bottom: calc(".concat(e.offsetBottom || u.offsetBottom, " - 30px);\n    ") }, u.mqMaxWidth, u.mobileOffsetBottom, u.mqMaxWidth, u.mqMaxHeight, u.offsetBottom, u.offsetTop, u.offsetSide, u.mqMaxHeight, u.offsetSide, u.mobileOffsetTop, u.mobileOffsetTop)
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(46),
        s = n.n(c),
        u = n(29),
        l = n.n(u),
        d = n(0),
        f = n.n(d),
        b = n(21),
        p = n.n(b),
        h = n(17),
        m = n(12),
        g = n(518),
        v = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.state = { isRendered: !1 }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    setTimeout(function() { return e.setState({ isRendered: !0 }) }, 0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.isRendered,
                        t = this.props,
                        n = t.className,
                        a = t.isAlignLeft,
                        r = t.isHidden,
                        i = t.isLarge,
                        o = t.isMobile,
                        c = t.labels,
                        u = t.onClick,
                        d = p()("c-BeaconCloseButton", a && "is-align-left", r && "is-hidden", i && "is-large", o && "is-mobile", e && "is-rendered", n),
                        b = o && f.a.createElement(l.a, { className: "c-BeaconCloseButton__iconCollapse", name: "minimize" }),
                        h = !o && f.a.createElement(l.a, { className: "c-BeaconCloseButton__iconClose", name: "cross-small", size: 24 }),
                        m = { "data-cy": "beacon-close-button", className: d, onClick: u },
                        v = i ? 14 : 13;
                    return f.a.createElement(g.a, m, b, f.a.createElement(g.b, { className: "c-BeaconCloseButton__label" }, f.a.createElement(s.a, { size: v }, c.beaconButtonClose)), h)
                }
            }]), t
        }(d.PureComponent);
    v.defaultProps = { isAlignLeft: !1, isHidden: !1, isLarge: !1, isMobile: !1, labels: {}, onClick: function() {} };
    var O = function(e) { return { labels: Object(m.x)(e) } };
    t.a = Object(h.b)(O)(v)
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s }), n.d(t, "b", function() { return u });
    var a, r, i = n(15),
        o = n(14),
        c = n.n(o),
        s = c()("button")(a || (a = Object(i.a)(["\n  -webkit-overflow-scrolling: touch;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background-color: rgba(57, 73, 86, 0.5);\n  border: none;\n  border-radius: 20px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: none;\n  font-size: 12px;\n  line-height: 14px;\n  outline: none;\n  padding: 0.5px 25px 0.5px 12px;\n  position: absolute;\n  right: 0;\n  top: -30px;\n  transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);\n\n  :hover {\n    background-color: rgba(57, 73, 86, 1);\n  }\n\n  .c-Icon {\n    position: absolute;\n    right: 4px;\n    top: -2px;\n  }\n\n  &.is-align-left {\n    left: 0;\n    right: auto;\n  }\n\n  &.is-hidden {\n    opacity: 0;\n  }\n\n  &.is-large {\n    background-color: rgba(57, 73, 86, 1);\n    height: 26px;\n    line-height: 26px;\n    padding-bottom: 0;\n    padding-top: 0;\n\n    .c-Icon {\n      top: 1px;\n    }\n  }\n\n  &.is-mobile {\n    align-items: center;\n    background-color: #29343e;\n    border-radius: 0;\n    box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.4) inset;\n    display: flex;\n    justify-content: center;\n    left: 0;\n    padding: 6px;\n    right: 0;\n    width: 100%;\n    top: -32px;\n\n    &.is-rendered {\n      display: flex;\n    }\n\n    :hover {\n      background-color: #29343e;\n    }\n\n    .c-Icon {\n      position: relative !important;\n      right: initial;\n      top: initial;\n    }\n\n    .c-BeaconCloseButton__iconCollapse {\n      margin-right: 2px;\n      transform: scale(-1, 1);\n    }\n  }\n\n  &.is-rendered {\n    display: block;\n  }\n"]))),
        u = c()("span")(r || (r = Object(i.a)(["\n  position: relative;\n  top: -0.5px;\n"])))
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s });
    var a = n(28),
        r = n.n(a),
        i = n(48),
        o = function(e) { return r()(e, "location.pathname") },
        c = function(e) { var t = o(e); if (e && t) { return !![i.b, i.e, i.k, i.l].filter(function(e) { return !t.indexOf("".concat(e, "/")) }).length } },
        s = function(e) {
            var t = o(e);
            e && t && c(e) && e.goBack()
        }
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(65),
        l = n(30),
        d = n(614),
        f = n(272),
        b = n(661),
        p = n(269),
        h = n(166),
        m = n(169),
        g = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.renderError = function(t) { var n = e.props.labels; return s.a.createElement(h.a, { message: n.docsArticleErrorText, retryCallback: t, retryLabel: n.tryAgain }) }, e.renderLoading = function() { return s.a.createElement(f.a, null) }, e.renderEscalation = function() { return e.props.messagingEnabled ? s.a.createElement(b.a, null) : null }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "hasArticleFooter",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.isFeedbackDisabled,
                        a = e.messagingEnabled;
                    return !0 !== n && t && t.data && t.data.id && !1 === t.data.deviceHasLeftFeedback && ("negative" === t.data.rating && !a || "negative" !== t.data.rating)
                }
            }, {
                key: "renderFeedbackFooter",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.shadow;
                    return this.hasArticleFooter() && s.a.createElement(p.a, { id: t.data.id, isFeedbackLoading: t.data.isFeedbackLoading, rating: t.data.rating || "", shadow: n })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.fetchArticle,
                        a = e.modalClassName,
                        r = e.openedArticles,
                        i = e.payload,
                        o = e.renderTo,
                        c = e.setScrollableNodeRef;
                    return s.a.createElement(u.a.Content, null, s.a.createElement(u.a.Body, { innerRef: c }, s.a.createElement(l.d, { resource: t, fetch: n, payload: i, renderLoading: this.renderLoading, renderError: this.renderError }, s.a.createElement(d.a, { "aria-labelledby": "article-modal-header", article: t.data, modalClassName: a, openedArticles: r, renderTo: o }))), this.renderFeedbackFooter(), this.renderEscalation())
                }
            }]), t
        }(c.Component);
    t.a = Object(m.a)(g)
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        r = n(6),
        i = n(7),
        o = n(108),
        c = n(8),
        s = n(9),
        u = n(0),
        l = n.n(u),
        d = n(93),
        f = n.n(d),
        b = n(120),
        p = (n.n(b), n(264)),
        h = n(608),
        m = n(21),
        g = n.n(m),
        v = n(609),
        O = ["className", "isOverlay", "onClose", "onOpen", "renderTo", "trackCloseModal", "trackOpenModal"],
        j = { isOverlay: !1, onClose: function() {}, onOpen: function() {}, trackCloseModal: function() {}, trackOpenModal: function() {} },
        y = f.a.Body,
        _ = f.a.Content,
        A = f.a.Footer,
        C = f.a.Header,
        E = p.e,
        w = Object(b.createUniqueIDFactory)("BeaconModal"),
        x = function(e) {
            function t() { var e; return Object(r.a)(this, t), e = n.call(this), e.handleOnClose = e.handleOnClose.bind(Object(o.a)(e)), e.handleOnOpen = e.handleOnOpen.bind(Object(o.a)(e)), e.touchableTimeout = null, e._isMounted = !1, e.state = { id: w(), isTouchable: !1, rootNode: null }, e }
            Object(c.a)(t, e);
            var n = Object(s.a)(t);
            return Object(i.a)(t, [{ key: "UNSAFE_componentWillMount", value: function() { this.setState({ rootNode: Object(h.a)() }) } }, { key: "componentDidMount", value: function() { this._isMounted = !0, this.state.rootNode || this.setState({ rootNode: Object(h.a)() }) } }, { key: "componentWillUnmount", value: function() { this._isMounted = !1, this.safeSetState({ rootNode: null }), this.stopTouchTimer() } }, { key: "safeSetState", value: function(e, t) { this._isMounted && this.setState(e, t) } }, {
                key: "startTouchTimer",
                value: function() {
                    var e = this;
                    this.touchableTimeout = setTimeout(function() { e.safeSetState({ isTouchable: !0 }) }, 100)
                }
            }, { key: "stopTouchTimer", value: function() { this.touchableTimeout && clearTimeout(this.touchableTimeout), this.safeSetState({ isTouchable: !1 }) } }, {
                key: "handleOnClose",
                value: function() {
                    var e = this.props,
                        t = e.onClose,
                        n = e.trackCloseModal,
                        a = this.state,
                        r = a.id,
                        i = a.rootNode;
                    i && i.classList.remove(E), n(r), t(), this.stopTouchTimer()
                }
            }, {
                key: "handleOnOpen",
                value: function() {
                    var e = this.props,
                        t = e.onOpen,
                        n = e.trackOpenModal,
                        a = this.state,
                        r = a.id,
                        i = a.rootNode;
                    i && i.classList.add(E), n(r), t(), this.startTouchTimer()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.isOverlay,
                        r = (e.onClose, e.onOpen, e.renderTo),
                        i = (e.trackCloseModal, e.trackOpenModal, Object(a.a)(e, O)),
                        o = this.state,
                        c = o.id,
                        s = o.isTouchable,
                        u = o.rootNode,
                        d = g()(n && "c-Modal--bottom", s && "c-Modal--touchable", t),
                        f = -1 !== d.indexOf("c-Article--sidebar"),
                        b = f ? "fade right" : "fade up";
                    return l.a.createElement(v.a, Object.assign({ modalAnimationSequence: b, modalAnimationDelay: 100, modalAnimationDuration: 450, modalAnimationEasing: "easeOutExpo", onClose: this.handleOnClose, onOpen: this.handleOnOpen, renderTo: r || u }, i, { id: c, className: d }))
                }
            }]), t
        }(u.PureComponent);
    x.defaultProps = j, x.displayName = "Modal", x.Body = y, x.Content = _, x.Footer = A, x.Header = C, t.a = x
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(71),
        r = function() { if (Object(a.c)()) { var e = document.getElementById("BeaconContainer-root"); return e || (e = document.createElement("div"), e.id = "BeaconContainer-root", document.body.appendChild(e)), e } var t = document.querySelector("#beacon-container .BeaconContainer iframe"); if (t) { return t.contentDocument.getElementById("BeaconContainer-root") } };
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return l });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = n(10),
        s = (n.n(c), n(610)),
        u = n(613),
        l = o()(s.a)(a || (a = Object(r.a)(["\n  padding: 10px 5px 5px 5px;\n\n  .c-CloseButton {\n    color: ", ";\n  }\n\n  &.c-Article--inline {\n    padding: 10px 15px 20px 15px;\n\n    .c-Modal__Overlay {\n      display: none;\n    }\n\n    .c-Modal__Card {\n      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.12),\n        0 3px 4px 0 rgba(0, 0, 0, 0.08);\n    }\n\n    ", ";\n  }\n\n  &.is-full {\n    .c-Modal__Card:after,\n    .c-Modal__Card:before {\n      display: none;\n    }\n  }\n\n  &.c-Article--modal {\n    .c-Modal__innerWrapper {\n      max-width: 600px;\n      max-height: 800px;\n    }\n  }\n\n  &.c-Article--sidebar {\n    .c-ArticleModal__Card {\n      border-radius: 0;\n    }\n\n    .c-Modal__Overlay {\n      display: none;\n    }\n\n    .ax-left {\n      transform: translateX(370px);\n    }\n  }\n\n  &.c-Modal--related {\n    .c-ArticleModal__Card {\n      box-shadow: none;\n    }\n    .c-Modal__Overlay {\n      background: transparent;\n    }\n  }\n\n  .c-Modal__Card-container::before {\n    background: #d3d6d8;\n    border-radius: 3px;\n    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.15), 0 0 0px 1px rgba(0, 0, 0, 0.1);\n    content: '';\n    height: 10px;\n    left: 5px;\n    opacity: 0;\n    padding: 5px 6px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    transform: translateY(-5px);\n  }\n\n  &.is-overlapped {\n    .c-Modal__Card-container::before {\n      opacity: 1;\n      transition: all 800ms cubic-bezier(0.68, -0.65, 0.265, 1.65);\n      transform: translateY(-10px);\n      transition-delay: 250ms;\n    }\n  }\n\n  &--expanded {\n    .c-Modal__Card-container > {\n      .c-Modal__content,\n      .c-Card {\n        height: 100%;\n        width: 100%;\n      }\n    }\n  }\n\n  &--centered {\n    .c-Modal__Card-container > {\n      .c-Card {\n        align-items: center;\n        display: flex;\n      }\n    }\n  }\n\n  &.c-Modal--bottom {\n    align-items: flex-end;\n    padding: 3px;\n\n    .c-Modal__innerWrapper,\n    .c-Modal__Card-container {\n      height: auto;\n      width: 100%;\n    }\n\n    .c-Modal__content,\n    .c-Scrollable__content,\n    .c-Card {\n      flex: 1;\n      margin-bottom: 0;\n    }\n  }\n\n  .c-Modal__Card.c-Card {\n    margin-bottom: 0;\n  }\n\n  .c-Scrollable__content {\n    -webkit-overflow-scrolling: auto;\n    @supports (-webkit-overflow-scrolling: touch) {\n      will-change: initial;\n    }\n  }\n\n  &.c-Modal--touchable {\n    .c-Scrollable__content {\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n"])), Object(c.getColor)("charcoal.300"), u.a)
}, function(e, t, n) {
    "use strict";
    var a = n(611);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        r = n(6),
        i = n(7),
        o = n(8),
        c = n(9),
        s = n(0),
        u = n.n(s),
        l = n(21),
        d = n.n(l),
        f = n(612),
        b = n(40),
        p = ["children"],
        h = function(e) {
            function t() { return Object(r.a)(this, t), n.apply(this, arguments) }
            Object(o.a)(t, e);
            var n = Object(c.a)(t);
            return Object(i.a)(t, [{ key: "getClassNames", value: function() { var e = this.props.className; return d()(Object(b.b)() && "is-mobile", e) } }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = Object(a.a)(e, p);
                    return u.a.createElement(f.a, Object.assign({}, n, { className: this.getClassNames() }), t)
                }
            }]), t
        }(s.PureComponent);
    t.a = h
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return l });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = n(93),
        s = n.n(c),
        u = n(323),
        l = o()(s.a)(a || (a = Object(r.a)(["\n  .c-Modal__innerWrapper {\n    height: 100%;\n    max-height: 100%;\n    width: 100%;\n\n    @media (max-width: 450px) {\n      max-width: 100%;\n    }\n  }\n\n  &.is-mobile {\n    .c-Modal__innerWrapper {\n      max-width: 100%;\n    }\n  }\n\n  .c-Modal__Card-container,\n  .c-Modal__Card,\n  .c-ModalBody__scrollable {\n    width: 100%;\n  }\n\n  .c-Modal__Card {\n    border: none;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.1);\n    min-height: 70px;\n    overflow: hidden;\n  }\n\n  .c-ModalBody__scrollable {\n    height: 100%;\n    width: 100%;\n  }\n\n  .c-ModalBody {\n    flex: auto;\n    width: 100%;\n  }\n\n  .c-PortalWrapper {\n    width: 100%;\n  }\n\n  .c-Scrollable__fader.is-top {\n    background: linear-gradient(\n      currentcolor 0%,\n      currentcolor 30%,\n      rgba(255, 255, 255, 0)\n    );\n    height: 38px;\n    z-index: 2;\n  }\n\n  .c-ToolbarShadow {\n    ", ";\n  }\n"])), u.a)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a });
    var a = "\n  .c-Modal__Card:after,\n  .c-Modal__Card:before {\n    right: 100%;\n    top: 288px;\n    border: solid transparent;\n    content: ' ';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n\n  .c-Modal__Card:after {\n    border-color: rgba(255, 255, 255, 0);\n    border-right-color: #fff;\n    border-width: 10px;\n    margin-top: -10px;\n  }\n\n  .c-Modal__Card:before {\n    border-color: rgba(229, 229, 229, 0);\n    border-right-color: #ccc;\n    border-width: 11px;\n    margin-top: -11px;\n  }\n\n  &.is-center {\n    /* center-left and center-center are the default */\n    &.is-right {\n      padding-right: 10px;\n\n      .c-Modal__Card:after,\n      .c-Modal__Card:before {\n        left: 100%;\n        right: auto;\n      }\n\n      .c-Modal__Card:after {\n        border-left-color: #fff;\n      }\n\n      .c-Modal__Card:before {\n        border-left-color: #ccc;\n      }\n    }\n  }\n\n  &.is-top {\n    .c-Modal__Card:after,\n    .c-Modal__Card:before {\n      border-color: rgba(229, 229, 229, 0);\n      right: auto;\n      top: -10px;\n    }\n\n    .c-Modal__Card:after {\n      border-bottom-color: #fff;\n      margin-left: 1px;\n    }\n\n    .c-Modal__Card:before {\n      border-bottom-color: #ccc;\n      margin-top: -12px;\n    }\n\n    &.is-left {\n      .c-Modal__Card:after,\n      .c-Modal__Card:before {\n        left: 24px;\n      }\n    }\n\n    &.is-center {\n      .c-Modal__Card:after,\n      .c-Modal__Card:before {\n        left: calc(50% - 10px);\n      }\n    }\n\n    &.is-right {\n      .c-Modal__Card:after,\n      .c-Modal__Card:before {\n        left: 326px;\n      }\n    }\n  }\n\n  &.is-bottom {\n    .c-Modal__Card:after,\n    .c-Modal__Card:before {\n      border-color: rgba(229, 229, 229, 0);\n      right: auto;\n      top: 602px;\n    }\n\n    .c-Modal__Card:after {\n      border-top-color: #fff;\n      margin-left: 1px;\n      margin-top: -12px;\n    }\n\n    .c-Modal__Card:before {\n      border-top-color: #ccc;\n      margin-top: -12px;\n    }\n\n    &.is-left {\n      .c-Modal__Card:after,\n      .c-Modal__Card:before {\n        left: 24px;\n      }\n    }\n\n    &.is-center {\n      .c-Modal__Card:after,\n      .c-Modal__Card:before {\n        left: calc(50% - 10px);\n      }\n    }\n\n    &.is-right {\n      .c-Modal__Card:after,\n      .c-Modal__Card:before {\n        left: 326px;\n      }\n    }\n  }\n"
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(615),
        d = n(33),
        f = n(12),
        b = n(50),
        p = n(265),
        h = function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "componentDidMount", value: function() { this.positionCloseNode() } }, { key: "positionCloseNode", value: function() { this.context.positionCloseNode && this.context.positionCloseNode() } }, {
                key: "renderOpenedArticles",
                value: function() {
                    var e = this.props,
                        t = e.modalClassName,
                        n = e.openedArticles,
                        a = e.renderTo;
                    if (0 !== n.length) return n.map(function(e) { return s.a.createElement(l.a, { key: e.id + e.index, article: e, isFeedbackLoading: e.isFeedbackLoading, modalClassName: t, rating: e.rating, renderTo: a }) })
                }
            }, { key: "renderArticle", value: function() { var e = this.props.article; return s.a.createElement(p.a, { article: e }) } }, { key: "render", value: function() { return s.a.createElement("div", { className: "c-DocsArticle" }, this.renderArticle(), this.renderOpenedArticles()) } }]), t
        }(c.PureComponent);
    h.defaultProps = { handleEscalationClick: function() {}, openedArticles: [] }, h.contextTypes = { positionCloseNode: function() {} }, h.displayName = "Article";
    var m = function(e, t) { return { isFeedbackDisabled: Object(b.e)(e), labels: Object(f.x)(e), messagingEnabled: Object(f.J)(e) } },
        g = { fetchArticle: d.c, submitArticleFeedback: d.h };
    t.a = Object(u.b)(m, g)(h)
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(21),
        l = n.n(u),
        d = n(17),
        f = n(33),
        b = n(12),
        p = n(50),
        h = n(65),
        m = n(616),
        g = function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "shouldComponentUpdate", value: function(e) { return this.props.article.isLoading !== e.article.isLoading || this.props.rating !== e.rating || this.props.isFeedbackLoading !== e.isFeedbackLoading } }, { key: "getClassName", value: function() { var e = this.props.modalClassName; return l()("c-ArticleModal", "c-Modal--expanded", "c-Modal--related", e) } }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.closeArticle,
                        a = e.fetchArticle,
                        r = e.isFeedbackDisabled,
                        i = e.isFeedbackLoading,
                        o = e.labels,
                        c = e.messagingEnabled,
                        u = e.rating,
                        l = e.renderTo,
                        d = { article: t, fetchArticle: a, isFeedbackDisabled: r, isFeedbackLoading: i, labels: o, messagingEnabled: c, rating: u };
                    return s.a.createElement(h.a, { cardClassName: "c-ArticleModal__Card", className: this.getClassName(), isOpen: !0, onClose: n, renderTo: l }, s.a.createElement(m.a, d))
                }
            }]), t
        }(c.Component);
    g.defaultProps = { article: {}, closeArticle: function() {}, fetchArticle: function() {}, isFeedbackLoading: !1, labels: {}, modalClassName: "" }, g.displayName = "OpenedArticle";
    var v = function(e) { return { isFeedbackDisabled: Object(p.e)(e), labels: Object(b.x)(e), messagingEnabled: Object(b.J)(e) } },
        O = { closeArticle: f.b, fetchArticle: f.c };
    t.a = Object(d.b)(v, O)(g)
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(166),
        l = n(65),
        d = n(265),
        f = n(269),
        b = n(272),
        p = n(169),
        h = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.retryCallback = function() {
                    var t = e.props,
                        n = t.article;
                    return (0, t.fetchArticle)({ id: n.id, isChild: !0 })
                }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "hasArticleFooter",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.isFeedbackDisabled,
                        a = e.messagingEnabled,
                        r = e.rating;
                    return !0 !== n && t && t.id && !1 === t.deviceHasLeftFeedback && ("negative" === r && !a || "negative" !== r)
                }
            }, {
                key: "renderArticle",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.labels,
                        a = e.rating;
                    return t.isError ? s.a.createElement(u.a, { message: n.docsArticleErrorText, retryCallback: this.retryCallback, retryLabel: n.tryAgain }) : t.isLoading ? s.a.createElement(b.a, null) : s.a.createElement(d.a, { article: t, rating: a })
                }
            }, {
                key: "renderFooter",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.isFeedbackLoading,
                        a = e.rating,
                        r = e.shadow;
                    return this.hasArticleFooter() ? s.a.createElement(f.a, { id: t.id, isFeedbackLoading: n, rating: a || "", shadow: r }) : null
                }
            }, { key: "render", value: function() { var e = this.props.setScrollableNodeRef; return s.a.createElement(l.a.Content, null, s.a.createElement(l.a.Body, { scrollFade: !1, innerRef: e }, this.renderArticle()), this.renderFooter()) } }]), t
        }(c.Component);
    t.a = Object(p.a)(h)
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return a }), n.d(t, "a", function() { return r });
    var a = "https://beacon-v2.helpscout.net/static/png",
        r = { grid: "01.png", shapes: "02.png", puzzle: "03.png" }
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(69),
        s = n.n(c),
        u = n(115),
        l = n.n(u),
        d = n(0),
        f = n.n(d),
        b = n(17),
        p = n(21),
        h = n.n(p),
        m = n(621),
        g = n.n(m),
        v = n(156),
        O = (n.n(v), n(304)),
        j = n(33),
        y = n(24),
        _ = n(12),
        A = n(625),
        C = n(626),
        E = n(634),
        w = n(266),
        x = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.handleArticleClick = function(t) {
                    var n = e.props,
                        a = n.article.linkedArticleIds,
                        r = n.fetchArticle,
                        i = n.toggleFullScreen,
                        o = Object(O.b)(t),
                        c = a && g()(a).find(function(e) { return e[0] === o });
                    return c && c[1] ? (t.preventDefault(), r({ id: c[1], isChild: !0 })) : Object(O.c)(t, i)
                }, e.handleFocus = function(t) { t && (t.persist(), e.lastFocusEvent = t) }, e.handleKeyPress = function() { Object(O.e)(e.lastFocusEvent, e.props.toggleFullScreen) }, e.setAriaNodeRef = function(t) { return e.ariaNodeRef = t }, e.setArticleContentRef = function(t) { return e.articleContentRef = t }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "componentDidMount", value: function() { this.ariaNodeRef && this.ariaNodeRef.focus(), Object(O.g)(this.articleContentRef) } }, { key: "getClassNames", value: function() { return h()("c-Article", this.props.className) } }, {
                key: "renderRelatedArticles",
                value: function() {
                    var e = this.props.article;
                    e = void 0 === e ? {} : e;
                    var t = e.related,
                        n = void 0 === t ? [] : t;
                    if (n.length) return f.a.createElement(E.a, { relatedArticles: n })
                }
            }, { key: "getDocument", value: function() { return this.context.document || document } }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.isDocsSiteVisible;
                    if (!t) return null;
                    var a = t.name,
                        r = t.text;
                    return f.a.createElement(w.b, { className: this.getClassNames() }, f.a.createElement(s.a, { role: "alert", "aria-live": "polite", "aria-label": "Doc article" }, f.a.createElement("div", { ref: this.setAriaNodeRef, tabIndex: 0 }, a)), f.a.createElement("article", { role: "region", "aria-label": "Doc article" }, f.a.createElement(C.a, { article: t, hasLink: n }), f.a.createElement(w.a, { className: "c-Article__content", ref: this.setArticleContentRef, onFocus: this.handleFocus }, f.a.createElement(l.a, { keyCode: 13, handler: this.handleKeyPress }), f.a.createElement(A.a, { className: "c-Article__contentBody", document: this.getDocument(), html: Object(O.f)(r), id: "fullArticle", onClick: this.handleArticleClick }))), this.renderRelatedArticles())
                }
            }]), t
        }(d.PureComponent);
    x.defaultProps = { isDocsSiteVisible: !0, toggleFullScreen: function() {} }, x.displayName = "Article", x.contextType = v.FrameContext;
    var S = function(e) { return { isDocsSiteVisible: Object(_.n)(e) } },
        T = { fetchArticle: j.c, toggleFullScreen: y.e };
    t.a = Object(b.b)(S, T)(x)
}, , function(e, t, n) {
    "use strict";
    var a = function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return t.reduce(function(e, t) { return function() { return e(t.apply(void 0, arguments)) } }, function(e) { return e }) };
    t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var a = n(290),
        r = function(e) {
            if (!e || "IFRAME" !== e.tagName) return !1;
            var t = e.getAttribute("height"),
                n = e.getAttribute("width");
            if (!t || !n) return !1;
            if (Object(a.d)(t, "%") || Object(a.d)(n, "%")) return !1;
            return parseInt(t, 10) / parseInt(n, 10) * 100 > 42
        }
}, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15 8a1 1 0 1 1 0-2h2c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2zm-4-3a1 1 0 1 1 0 2H8.414l5.293 5.293a.999.999 0 1 1-1.414 1.414L7 8.414V11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1h5z"/></svg>\n' }, function(e, t, n) {
    "use strict";
    var a = n(18),
        r = n(6),
        i = n(7),
        o = n(8),
        c = n(9),
        s = n(0),
        u = n.n(s),
        l = ["children", "document", "html"],
        d = function(e) {
            function t() { return Object(r.a)(this, t), n.apply(this, arguments) }
            Object(o.a)(t, e);
            var n = Object(c.a)(t);
            return Object(i.a)(t, [{
                key: "injectWistiaScript",
                value: function(e) {
                    if (!e.getElementById("wistia_script")) {
                        var t = e.createElement("script");
                        t.id = "wistia_script", t.src = "https://fast.wistia.com/assets/external/E-v1.js", t.async = !0, e.body.appendChild(t)
                    }
                }
            }, {
                key: "parseWistiaEmbed",
                value: function(e, t) {
                    var n = Array.from(e.querySelectorAll("script")).filter(function(e) { return e.src && -1 !== e.src.indexOf("wistia.com") });
                    n && n.length && (this.injectWistiaScript(t), n.forEach(function(e) { e.parentNode.removeChild(e) }))
                }
            }, {
                key: "getParsedHTML",
                value: function() {
                    var e = this.props,
                        t = e.document,
                        n = e.html,
                        a = t.createElement("div");
                    return a.innerHTML = n, this.parseWistiaEmbed(a, t), a.innerHTML
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = (e.children, e.document, e.html, Object(a.a)(e, l));
                    return u.a.createElement("div", Object.assign({}, t, { dangerouslySetInnerHTML: { __html: this.getParsedHTML() } }))
                }
            }]), t
        }(u.a.Component);
    d.defaultProps = { document: window.document, html: "" }, t.a = d
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(86),
        s = n.n(c),
        u = n(0),
        l = n.n(u),
        d = n(629),
        f = n(266),
        b = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.handleTitleClick = function(t) {
                    var n = e.props,
                        a = n.article,
                        r = n.hasLink;
                    t.preventDefault(), a.url && r && window.open(a.url, "_blank")
                }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.article,
                        n = e.hasLink;
                    if (!t) return null;
                    var a = t.name,
                        r = t.url,
                        i = n ? f.c : "span",
                        o = n ? f.e : s.a;
                    return l.a.createElement(d.a, { className: "c-ArticleHeader" }, l.a.createElement(i, { className: "c-Article__title", onClick: this.handleTitleClick, href: r, "aria-label": "".concat(a, ". Click to open in new window.") }, l.a.createElement(o, { className: "c-Article__titleHeading", title: a, size: "h3", role: "link" }, l.a.createElement(f.d, { size: "h1", id: "article-modal-header" }, a), l.a.createElement(f.f, { className: "c-Article__openIcon", inline: !0, name: "fullscreen", shade: "faint", title: "Open in a new window", "aria-hidden": !0 }))))
                }
            }]), t
        }(u.PureComponent);
    t.a = b
}, , , function(e, t, n) {
    "use strict";
    var a = n(630);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        r = n(6),
        i = n(7),
        o = n(8),
        c = n(9),
        s = n(0),
        u = n.n(s),
        l = n(21),
        d = n.n(l),
        f = n(173),
        b = n(632),
        p = ["children"],
        h = function(e) {
            function t() { return Object(r.a)(this, t), n.apply(this, arguments) }
            Object(o.a)(t, e);
            var n = Object(c.a)(t);
            return Object(i.a)(t, [{ key: "getClassNames", value: function() { return d()("c-ContentHeader", this.props.className) } }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = Object(a.a)(e, p);
                    return u.a.createElement(b.a, Object.assign({ className: this.getClassNames() }, n), u.a.createElement(f.a, null, t))
                }
            }]), t
        }(s.PureComponent);
    t.a = h
}, function(e, t, n) {
    "use strict";

    function a() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "h1"; return f()(e)(r || (r = Object(i.a)(["\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n  "]))) }
    var r, i = n(15),
        o = n(18),
        c = n(6),
        s = n(7),
        u = n(8),
        l = n(9),
        d = n(14),
        f = n.n(d),
        b = n(0),
        p = n.n(b),
        h = ["size"],
        m = function(e) {
            function t() { return Object(c.a)(this, t), n.apply(this, arguments) }
            Object(u.a)(t, e);
            var n = Object(l.a)(t);
            return Object(s.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.size,
                        n = Object(o.a)(e, h),
                        r = a(t);
                    return p.a.createElement(r, n)
                }
            }]), t
        }(b.PureComponent);
    m.defaultProps = { size: "h1" }, t.a = m
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = { fontWeight: 500 },
        s = o()("header")(a || (a = Object(r.a)(["\n  font-size: 20px;\n  font-weight: ", ";\n  line-height: 1.2;\n  margin-bottom: 15px;\n  margin-right: 20px;\n\n  h1 {\n    font-weight: ", ";\n  }\n"])), c.fontWeight, c.fontWeight)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return c });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = o()("div")(a || (a = Object(r.a)(["\n  /**\n * @helpscout/doc-article-styles v0.1.4\n * Doc Article CSS\n * Web\n */\n\n  .c-BeaconHistoryTimeline {\n    max-width: 800px;\n    width: 100%;\n  }\n\n  .c-BeaconHistoryTimeline {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimeline {\n    font-family: 'Roboto', 'Helvetica', sans-serif;\n    font-size: 14px;\n  }\n\n  .c-BeaconHistoryTimeline * {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimelineHeading {\n    font-size: 15px;\n    font-weight: bold;\n    line-height: 1.1;\n    margin-bottom: 12px;\n  }\n\n  .c-BeaconHistoryTimelineHeading {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimelineHeading {\n    font-family: 'Roboto', 'Helvetica', sans-serif;\n    font-size: 14px;\n  }\n\n  .c-BeaconHistoryTimelineHeading * {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimelineList {\n    width: 100%;\n  }\n\n  .c-BeaconHistoryTimelineList {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimelineList {\n    font-family: 'Roboto', 'Helvetica', sans-serif;\n    font-size: 14px;\n  }\n\n  .c-BeaconHistoryTimelineList * {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimelineListItem {\n    color: #253540;\n    display: block;\n    line-height: 1.5;\n    margin-left: 4px;\n    padding: 6px 0 6px 20px;\n    position: relative;\n  }\n\n  .c-BeaconHistoryTimelineListItem {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimelineListItem {\n    font-family: 'Roboto', 'Helvetica', sans-serif;\n    font-size: 14px;\n  }\n\n  .c-BeaconHistoryTimelineListItem * {\n    box-sizing: border-box;\n  }\n\n  .c-BeaconHistoryTimelineListItem__block {\n    max-width: calc(100% - 60px);\n  }\n\n  .c-BeaconHistoryTimelineListItem__timestamp {\n    min-width: 60px;\n  }\n\n  .c-BeaconHistoryTimelineListItem::before {\n    background-color: #e3e8eb;\n    bottom: 0;\n    content: '';\n    left: 4px;\n    position: absolute;\n    top: 0;\n    width: 2px;\n    z-index: 0;\n  }\n\n  .c-BeaconHistoryTimelineListItem::after {\n    background-color: white;\n    border-radius: 50%;\n    border: 2px solid #a5b2bd;\n    content: '';\n    display: block;\n    height: 6px;\n    left: 0;\n    position: absolute;\n    top: 11px;\n    width: 6px;\n    z-index: 1;\n  }\n\n  .c-BeaconHistoryTimelineListItem:first-child::before {\n    bottom: 0;\n    top: 11px;\n  }\n\n  .c-BeaconHistoryTimelineListItem:last-child::before {\n    bottom: calc(100% - (11px + (6px / 2)));\n    top: 0;\n  }\n\n  .c-BeaconHistoryTimelineListItem:only-child::before {\n    display: none;\n  }\n\n  .c-BeaconHistoryTimelineListItem a {\n    color: #0077cc;\n    cursor: pointer;\n    outline: none;\n    text-decoration: none;\n  }\n\n  .c-BeaconHistoryTimelineListItem a:hover {\n    color: #1292ee;\n    text-decoration: underline;\n  }\n\n  #fullArticle {\n    color: #4f5d6b;\n    font-family: 'Roboto', 'Helvetica', sans-serif;\n    line-height: 1.75em;\n  }\n\n  #fullArticle {\n    box-sizing: border-box;\n  }\n\n  #fullArticle {\n    font-family: 'Roboto', 'Helvetica', sans-serif;\n    font-size: 14px;\n  }\n\n  #fullArticle * {\n    box-sizing: border-box;\n  }\n\n  #fullArticle * {\n    max-width: 100%;\n  }\n\n  #fullArticle a,\n  #fullArticle input,\n  #fullArticle select,\n  #fullArticle textarea {\n    outline: 0 !important;\n  }\n\n  #fullArticle {\n    padding: 0;\n  }\n\n  #fullArticle > *:first-child {\n    margin-top: 0;\n  }\n\n  #fullArticle blockquote {\n    border-left: 2px solid #e3e8eb;\n    font-size: 1em;\n    font-style: italic;\n    margin: 1.5em 1.2em 1.5em 0;\n    padding: 0 0 0 1em;\n  }\n\n  #fullArticle pre {\n    background: #f1f3f5;\n    border-radius: 3px;\n    color: #4f5d6b;\n    font-family: 'Roboto Mono', Consolas, 'Andale Mono', 'Lucida Console',\n      Monaco, 'Courier New', Courier, monospace;\n    font-size: 0.9em;\n    margin: 0 0 2em;\n    overflow: auto;\n    padding: 1.3em 1em;\n  }\n\n  @-moz-document url-prefix() {\n    #fullArticle pre {\n      border-radius: initial;\n    }\n  }\n\n  #fullArticle > div {\n    margin-bottom: 1.5em;\n    margin-top: 1em;\n  }\n\n  #fullArticle h1,\n  #fullArticle h2,\n  #fullArticle h3,\n  #fullArticle h4,\n  #fullArticle h5,\n  #fullArticle h6 {\n    color: #2a3b47;\n    font-weight: 500;\n    margin-bottom: 0.65em;\n    margin-top: 1.26em;\n  }\n\n  #fullArticle h1:first-child,\n  #fullArticle h2:first-child,\n  #fullArticle h3:first-child,\n  #fullArticle h4:first-child,\n  #fullArticle h5:first-child,\n  #fullArticle h6:first-child {\n    margin-top: 0;\n  }\n\n  #fullArticle h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  #fullArticle h2 {\n    font-size: 1.56em;\n  }\n\n  #fullArticle h3 {\n    font-size: 1.4em;\n  }\n\n  #fullArticle h4 {\n    font-size: 1.24em;\n  }\n\n  #fullArticle h5 {\n    font-size: 1em;\n  }\n\n  #fullArticle hr {\n    border-left: 0;\n    border-right: 0;\n    border-bottom: 0;\n    border-top: 1px solid #e3e8eb;\n    margin: 2em auto;\n  }\n\n  #fullArticle img {\n    border-radius: 3px;\n    display: block;\n    margin: 1em 0 2em;\n  }\n\n  #fullArticle img.noBdr {\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n\n  #fullArticle ul,\n  #fullArticle ol {\n    list-style-position: outside;\n    padding-left: 1em;\n  }\n\n  #fullArticle li {\n    margin-bottom: 0.2em;\n  }\n\n  #fullArticle ol ol {\n    list-style-type: lower-alpha;\n  }\n\n  #fullArticle dl {\n    clear: both;\n    margin: 0 0 1em;\n  }\n\n  #fullArticle dl dt {\n    color: inherit;\n    display: inline-block;\n    float: left;\n    font-size: 1em;\n    font-weight: 500;\n    margin: 3px 0 0 0;\n    padding: 0 0.5em;\n    color: #2a3b47;\n    border-left: 3px solid #1292ee;\n  }\n\n  #fullArticle dl dd {\n    padding-top: 3px;\n    margin: 0 0 1.5em 2em;\n  }\n\n  #fullArticle dl p:first-child {\n    margin-top: 0;\n  }\n\n  #fullArticle a {\n    color: #0077cc;\n    text-decoration: none;\n  }\n\n  #fullArticle a:hover {\n    text-decoration: underline;\n  }\n\n  #fullArticle p {\n    margin-bottom: 1.5em;\n    margin-top: 1em;\n  }\n\n  #fullArticle table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n  }\n\n  #fullArticle table thead {\n    color: #2a3b47;\n    font-weight: 500;\n  }\n\n  #fullArticle table thead th {\n    display: table-cell;\n    padding: 0.5em 0;\n    text-align: left;\n    vertical-align: bottom;\n  }\n\n  #fullArticle table thead th:first-child {\n    border-top: 0;\n  }\n\n  #fullArticle table td {\n    border-top: 1px solid #e3e8eb;\n    padding: 0.5em 0;\n    text-align: left;\n    vertical-align: top;\n  }\n\n  #fullArticle table.table-striped tr:nth-child(odd) td {\n    background: #f9fafa;\n  }\n\n  #fullArticle table.table-bordered {\n    border-collapse: separate;\n    border-radius: 3px;\n    border: 1px solid #e3e8eb;\n    border-left: 0;\n  }\n\n  #fullArticle table.table-bordered td {\n    padding: 0.5em;\n  }\n\n  #fullArticle table.table-bordered thead th {\n    padding: 0.5em;\n  }\n\n  #fullArticle table.table-bordered tr:first-child td {\n    border-top: 0;\n  }\n\n  #fullArticle table.table-bordered th,\n  #fullArticle table.table-bordered td {\n    border-left: 1px solid #e3e8eb;\n  }\n\n  #fullArticle p {\n    font-size: 1em;\n  }\n\n  #fullArticle strong {\n    color: #394956;\n  }\n\n  #fullArticle .callout {\n    background: #f1f3f5;\n    border-left: 3px solid #d6dde3;\n    border-radius: 2px;\n    margin: 0 0 2em;\n    padding: 1.2em 1em 1em;\n  }\n\n  #fullArticle .callout h1,\n  #fullArticle .callout h2,\n  #fullArticle .callout h3,\n  #fullArticle .callout h4,\n  #fullArticle .callout h5,\n  #fullArticle .callout h6,\n  #fullArticle .callout p {\n    color: #394956;\n    font-weight: 500;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout pre {\n    background: #e3e8eb;\n    color: #394956;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout.dashed {\n    border: 1px dashed #d6dde3;\n  }\n\n  #fullArticle .callout-yellow {\n    background: #fff6e2;\n    border-left: 3px solid #ffd56d;\n    border-radius: 2px;\n    margin: 0 0 2em;\n    padding: 1.2em 1em 1em;\n  }\n\n  #fullArticle .callout-yellow h1,\n  #fullArticle .callout-yellow h2,\n  #fullArticle .callout-yellow h3,\n  #fullArticle .callout-yellow h4,\n  #fullArticle .callout-yellow h5,\n  #fullArticle .callout-yellow h6,\n  #fullArticle .callout-yellow p {\n    color: #b37100;\n    font-weight: 500;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-yellow pre {\n    background: #e3e8eb;\n    color: #394956;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-yellow.dashed {\n    border: 1px dashed #d79400;\n  }\n\n  #fullArticle .callout-blue {\n    background: #d6edff;\n    border-left: 3px solid #57b0fb;\n    border-radius: 2px;\n    margin: 0 0 2em;\n    padding: 1.2em 1em 1em;\n  }\n\n  #fullArticle .callout-blue h1,\n  #fullArticle .callout-blue h2,\n  #fullArticle .callout-blue h3,\n  #fullArticle .callout-blue h4,\n  #fullArticle .callout-blue h5,\n  #fullArticle .callout-blue h6,\n  #fullArticle .callout-blue p {\n    color: #034077;\n    font-weight: 500;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-blue pre {\n    background: #e3e8eb;\n    color: #394956;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-blue.dashed {\n    border: 1px dashed #1292ee;\n  }\n\n  #fullArticle .callout-green {\n    background: #e4fbe6;\n    border-left: 3px solid #81dc9e;\n    border-radius: 2px;\n    margin: 0 0 2em;\n    padding: 1.2em 1em 1em;\n  }\n\n  #fullArticle .callout-green h1,\n  #fullArticle .callout-green h2,\n  #fullArticle .callout-green h3,\n  #fullArticle .callout-green h4,\n  #fullArticle .callout-green h5,\n  #fullArticle .callout-green h6,\n  #fullArticle .callout-green p {\n    color: #228350;\n    font-weight: 500;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-green pre {\n    background: #e3e8eb;\n    color: #394956;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-green.dashed {\n    border: 1px dashed #4bc27d;\n  }\n\n  #fullArticle .callout-red {\n    background: #ffe3e2;\n    border-left: 3px solid #f45b55;\n    border-radius: 2px;\n    margin: 0 0 2em;\n    padding: 1.2em 1em 1em;\n  }\n\n  #fullArticle .callout-red h1,\n  #fullArticle .callout-red h2,\n  #fullArticle .callout-red h3,\n  #fullArticle .callout-red h4,\n  #fullArticle .callout-red h5,\n  #fullArticle .callout-red h6,\n  #fullArticle .callout-red p {\n    color: #9d1f1a;\n    font-weight: 500;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-red pre {\n    background: #e3e8eb;\n    color: #394956;\n    margin: 0 0 0.3em;\n  }\n\n  #fullArticle .callout-red.dashed {\n    border: 1px dashed #e52f28;\n  }\n"])))
}, function(e, t, n) {
    "use strict";
    var a = n(635);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(12),
        d = n(636),
        f = n(267),
        b = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.renderCard = function(e, t) { return s.a.createElement(d.a, { article: e, key: e.id || t }) }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.labels,
                        n = e.relatedArticles;
                    return s.a.createElement(f.c, null, s.a.createElement(f.d, { className: "c-RelatedArticles", "aria-label": "Related Articles" }, s.a.createElement("header", null, s.a.createElement(f.b, { className: "c-RelatedArticles__heading", size: "h4" }, t.relatedArticles)), s.a.createElement("div", { className: "c-RelatedArticles__content" }, n.map(this.renderCard))))
                }
            }]), t
        }(c.PureComponent);
    b.defaultProps = { labels: {}, relatedArticles: [] };
    var p = function(e) { return { labels: Object(l.x)(e) } };
    t.a = Object(u.b)(p)(b)
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(17),
        l = n(33),
        d = n(267),
        f = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.handleOnClick = function(t) {
                    var n = e.props.article.id;
                    t && t.preventDefault(), e.props.fetchArticle({ id: n, isChild: !0 })
                }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.article,
                        t = e.id,
                        n = e.name,
                        a = e.preview,
                        r = e.previewTrimmed,
                        i = e.url,
                        o = "Related article: ".concat(n, ". ").concat(a, ".");
                    return s.a.createElement(d.a, { "aria-label": o, className: "c-RelatedArticles__ArticleCard", content: a + (r ? "â€¦" : ""), contentLimit: 201, href: i, key: t, onClick: this.handleOnClick, title: n })
                }
            }]), t
        }(c.PureComponent);
    f.defaultProps = { article: {}, fetchArticle: function() {} };
    var b = { fetchArticle: l.c };
    t.a = Object(u.b)(null, b)(f)
}, , , , , function(e, t, n) {
    "use strict";
    var a = n(642);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(326),
        s = n.n(c),
        u = n(46),
        l = n.n(u),
        d = n(47),
        f = n.n(d),
        b = n(0),
        p = n.n(b),
        h = n(21),
        m = n.n(h),
        g = n(174),
        v = n(649),
        O = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.getFeedbackLabel = function() {
                    var t = e.props,
                        n = t.confirmationLabel,
                        a = t.questionLabel;
                    return t.rating ? n : a
                }, e.renderEmoticonsMarkup = function() {
                    var t = e.props,
                        n = t.isLoading,
                        a = t.onClickHappy,
                        r = t.onClickSad,
                        i = t.rating,
                        o = t.yesLabel,
                        c = t.noLabel,
                        u = e.getFeedbackLabel();
                    return !i && p.a.createElement(f.a, null, p.a.createElement(f.a.Item, null, p.a.createElement(s.a, { "aria-label": "Send feedback: ".concat(o, '. For "').concat(u, '"'), "data-cy": "RateAction", disabled: n, isActive: !1, name: "happy", onClick: a, title: o })), p.a.createElement(f.a.Item, null, p.a.createElement(s.a, { "aria-label": "Send feedback: ".concat(c, '. For "').concat(u, '"'), "data-cy": "RateAction", isActive: !1, name: "sad", onClick: r, title: c })))
                }, e.renderLabelsMarkup = function() {
                    var t = e.props,
                        n = t.confirmationLabel,
                        a = t.questionLabel;
                    return t.rating ? p.a.createElement(g.a, null, n) : p.a.createElement("div", { className: "c-ArticleFeedback__questionLabel", "aria-label": a }, p.a.createElement(l.a, { shade: "subtle" }, a))
                }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.className,
                        t = this.renderEmoticonsMarkup(),
                        n = this.renderLabelsMarkup(),
                        a = m()("c-ArticleFeedback", e);
                    return p.a.createElement(v.a, { className: a, gap: "none" }, p.a.createElement(f.a.Block, { className: "c-ArticleFeedback__content" }, n), p.a.createElement(f.a.Item, { className: "c-ArticleFeedback__actions" }, t))
                }
            }]), t
        }(b.PureComponent);
    O.defaultProps = { questionLabel: "Did this answer your question?", confirmationLabel: "Thanks for the feedback!", yesLabel: "Yes", noLabel: "No", isLoading: !1, onClickHappy: function() {}, onClickSad: function() {} }, t.a = O
}, , , , , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(46),
        s = n.n(c),
        u = n(0),
        l = n.n(u),
        d = n(648),
        f = function(e) {
            function t() { return Object(a.a)(this, t), n.apply(this, arguments) }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.icon,
                        n = e.children;
                    return l.a.createElement(d.b, { className: "c-SuccessMessage" }, l.a.createElement(d.a, { name: t, size: 24, "aria-hidden": !0 }), l.a.createElement(s.a, { weight: 600 }, n))
                }
            }]), t
        }(u.PureComponent);
    f.defaultProps = { icon: "tick-small", children: "Thank You" }, t.a = f
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return d }), n.d(t, "a", function() { return f });
    var a, r, i = n(15),
        o = n(29),
        c = n.n(o),
        s = n(14),
        u = n.n(s),
        l = n(10),
        d = (n.n(l), u()("div")(a || (a = Object(i.a)(["\n  align-items: center;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  color: ", ";\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  margin: 20px -5px 20px -5px;\n  padding: 10px;\n  text-align: center;\n"])), Object(l.getColor)("green.100"), Object(l.getColor)("green.400"), Object(l.getColor)("green.600"))),
        f = u()(c.a)(r || (r = Object(i.a)(["\n  margin: -3px 0;\n"])))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return u });
    var a, r = n(15),
        i = n(47),
        o = n.n(i),
        c = n(14),
        s = n.n(c),
        u = s()(o.a)(a || (a = Object(r.a)(["\n  width: 100%;\n"])))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return u });
    var a, r = n(15),
        i = n(93),
        o = n.n(i),
        c = n(14),
        s = n.n(c),
        u = s()(o.a.Footer)(a || (a = Object(r.a)(["\n  border-top: none !important;\n  height: 100%;\n  min-height: 60px;\n  padding: 0 20px !important;\n"])))
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(662);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(273),
        s = n.n(c),
        u = n(86),
        l = n.n(u),
        d = n(0),
        f = n.n(d),
        b = n(21),
        p = n.n(b),
        h = n(17),
        m = n(33),
        g = n(24),
        v = n(88),
        O = n(12),
        j = n(87),
        y = n(65),
        _ = n(174),
        A = n(48),
        C = n(669),
        E = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.handleOnClose = function() { e.props.toggleBeacon(!0), e.props.onClose() }, e.onClickAnswers = function() { e.handleOnClose(), e.handleOnEscalationClick(A.a) }, e.onClickAsk = function() { e.handleOnClose(), e.handleOnEscalationClick(A.c) }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "handleOnEscalationClick", value: function(e) { this.props.closeAllArticles(), this.props.history.replace(e) } }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.isOpen,
                        a = e.labels,
                        r = p()("c-ArticleEscalationModal", "Modal", "c-Modal--bottom", t);
                    return n && f.a.createElement(y.a, { cardClassName: "c-ArticleEscalationModal__Card", className: r, closeIcon: !1, isOpen: !0, onClose: this.handleOnClose, isOverlay: !0 }, f.a.createElement(y.a.Body, null, f.a.createElement(C.c, { className: "c-ArticleEscalationModal__header" }, f.a.createElement(l.a, { center: !0, size: "h4" }, a.escalationWhatNext)), f.a.createElement(C.a, null, f.a.createElement(s.a, { className: "c-ArticleEscalationModal__optionSearch", href: "#", icon: "search-medium", onClick: this.onClickAnswers, title: a.escalationSearchTitle, subtitle: a.escalationSearchText }), f.a.createElement(s.a, { className: "c-ArticleEscalationModal__optionChat", href: "#", icon: "chat", onClick: this.onClickAsk, title: a.escalationTalkTitle, subtitle: a.escalationTalkText })), f.a.createElement(C.b, { className: "c-ArticleEscalationModal__footer" }, f.a.createElement(_.a, null, a.escalationThanksFeedback))))
                }
            }]), t
        }(d.PureComponent);
    E.defaultProps = { closeAllArticles: function() {}, labels: {}, onEscalationClick: function() {}, onClose: function() {}, toggleBeacon: function() {}, isOpen: !0 };
    var w = function(e) { var t = e.history; return { isOpen: Object(j.l)(e), history: t, labels: Object(O.x)(e) } },
        x = { closeAllArticles: m.a, onClose: function() { return Object(v.o)(!1) }, toggleBeacon: g.c };
    t.a = Object(h.b)(w, x)(E)
}, , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() { return d }), n.d(t, "b", function() { return f }), n.d(t, "a", function() { return b });
    var a, r, i, o = n(15),
        c = n(273),
        s = n.n(c),
        u = n(14),
        l = n.n(u),
        d = l()("div")(a || (a = Object(o.a)(["\n  margin-bottom: 20px;\n  padding-top: 10px;\n  text-align: center;\n"]))),
        f = l()("div")(r || (r = Object(o.a)(["\n  margin-top: 20px;\n\n  .c-SuccessMessage {\n    margin-bottom: 0;\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]))),
        b = l()(s.a.Container)(i || (i = Object(o.a)(["\n  & > * + * {\n    margin-left: 10px;\n  }\n"])))
}, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    t.a = function(e, t) { if (!t || !Array.isArray(e)) return e; var n = e.map(function(e) { return e[t] }); return n.filter(function(e, t) { return n.indexOf(e) === t }).map(function(n) { return e.find(function(e) { return e[t] === n }) }) }
}, function(e, t, n) {
    "use strict";
    var a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.page,
            a = void 0 === n ? 1 : n,
            r = t.pages,
            i = void 0 === r ? 1 : r,
            o = t.pageSize,
            c = void 0 === o ? 0 : o,
            s = t.count,
            u = void 0 === s ? 0 : s;
        if (Array.isArray(e)) { var l = e.length; return { items: e, paging: { page: a, pages: i, pageSize: c || l, count: u || l } } }
        return e
    };
    t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.items,
            n = void 0 === t ? [] : t,
            a = e.paging,
            o = void 0 === a ? {} : a,
            c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return { pages: Object(i.a)(Object(i.a)({}, c.pages), {}, Object(r.a)({}, o.page, n)), paging: o }
    }
    var r = n(121),
        i = n(5);
    t.a = a
}, function(e, t, n) {
    "use strict";
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = o.a.div(a || (a = Object(r.a)(["\n  bottom: 0;\n  content: '';\n  height: 400px;\n  pointer-events: none;\n  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 400px;\n  will-change: left, right, background, opacity;\n\n  ", ";\n"])), function(e) {
            var t = e.position,
                n = e.positionAbsolute,
                a = e.visible,
                r = e.zIndex;
            return "\n    background: radial-gradient(at ".concat(t, " bottom, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0) 75%);\n    opacity: ").concat(a ? "1" : "0", ";\n    position: ").concat(n ? "absolute" : "fixed", ";\n    z-index: ").concat(r, ";\n    ").concat("left" === t ? "\n      left: 0;\n    " : "\n      right: 0;\n    ", "\n  ")
        });
    c.defaultProps = { position: "right", visible: !1, zIndex: 99999999 }, t.a = c
}, function(e, t, n) {
    "use strict";
    var a = n(686);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(21),
        l = n.n(u),
        d = n(76),
        f = n(687),
        b = n(62),
        p = n(228),
        h = n(236),
        m = n(133),
        g = n(698),
        v = n(40),
        O = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.state = { frameHeight: b.b, frameWidth: b.b, isRendered: !1 }, e._isMounted = !1, e.buttonNode = null, e.handleFrameContentDidMount = function() { requestAnimationFrame(function() { e.safeSetState({ isRendered: !0 }) }) }, e.handleMouseOver = function() { p.a.preload() }, e.safeSetState = function(t, n) { e._isMounted && e.setState(t, n) }, e.updateFrameHeight = function(t) { e.setState({ frameHeight: t }) }, e.updateFrameWidth = function(t) { e.setState({ frameWidth: t }) }, e.setNodeRef = function(t) { return e.buttonNode = t }, e.shouldShowPulseAnimation = function() {
                    var t = e.props,
                        n = t.config,
                        a = t.status;
                    return n.enableFabAnimation && !a.hasShownFabAnimation
                }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "componentDidMount", value: function() { this._isMounted = !0 } }, { key: "componentWillUnmount", value: function() { this._isMounted = !1, this.buttonNode = null } }, { key: "componentDidUpdate", value: function(e, t) { e.status.isOpened && !this.props.status.isOpened && this.buttonNode && this.buttonNode.focus() } }, {
                key: "getDivStyles",
                value: function() {
                    var e = this.props.config,
                        t = this.state.isRendered,
                        n = e.display,
                        a = this.getHeightForFABType(n.style),
                        r = this.getWidthForFABType(n.style),
                        i = { borderRadius: a, height: a, position: "fixed", transform: "scale(".concat(t ? "1" : "0", ")"), width: r, zIndex: m.a.BeaconFabButtonFrame };
                    return n && n.zIndex && (i.zIndex = n.zIndex - 1), !0 === e.positionAbsolute && (i.position = "absolute"), i
                }
            }, {
                key: "getHeightForFABType",
                value: function(e) {
                    switch (e) {
                        case b.g:
                        case b.e:
                            return this.state.frameHeight;
                        default:
                            return b.b
                    }
                }
            }, {
                key: "getWidthForFABType",
                value: function(e) {
                    switch (e) {
                        case b.g:
                        case b.e:
                            return this.state.frameWidth;
                        default:
                            return b.b
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.chat,
                        n = e.chatActiveAgent,
                        a = e.config,
                        r = e.labels,
                        i = e.onClick,
                        o = e.status,
                        c = a.display,
                        u = a.hideFABOnMobile,
                        p = a.hideFABLabelOnMobile,
                        m = o.hasUnreadMessages,
                        O = o.isContainerMounted,
                        y = o.isOpened,
                        _ = this.getDivStyles(),
                        A = !(!n || !n.displayName),
                        C = j(t),
                        E = C && !y,
                        w = E || m;
                    if (Object(v.b)() && u || c.style === b.f && !E) return null;
                    var x = { height: this.getHeightForFABType(c.style), width: this.getWidthForFABType(c.style) },
                        S = l()("BeaconFabButtonFrame", this.shouldShowPulseAnimation() && "has-pulseAnimation", Object(h.b)(this.props) && "is-configDisplayLeft"),
                        T = w ? s.a.createElement(f.a, { isAgentConnected: A }) : null;
                    return s.a.createElement(g.a, { className: S, dimensions: x, style: _ }, s.a.createElement(d.a, { config: a, "aria-label": "Toggle Customer Support" }, s.a.createElement(f.b, { chatAgent: n, hasNotifications: C, hideFABLabelOnMobile: p, icon: c.iconImage, isLoading: y && !O, isOpened: y && O, nodeRef: this.setNodeRef, labels: r, onClick: i, onMount: this.handleFrameContentDidMount, onMouseOver: this.handleMouseOver, text: c.text, textAlign: c.textAlign, type: c.style, updateFrameHeight: this.updateFrameHeight, updateFrameWidth: this.updateFrameWidth })), T)
                }
            }]), t
        }(c.Component);
    O.defaultProps = { chat: { notifications: [] }, chatActiveAgent: {}, config: {}, labels: {}, status: {}, onClick: function() {} };
    var j = function(e) { return !!e.notifications.length };
    t.a = O
}, function(e, t, n) {
    "use strict";
    var a = n(688),
        r = n(696);
    n.d(t, "a", function() { return r.a }), t.b = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(157),
        s = n.n(c),
        u = n(0),
        l = n.n(u),
        d = n(62),
        f = n(99),
        b = n(689),
        p = n.n(b),
        h = n(690),
        m = n.n(h),
        g = n(691),
        v = n.n(g),
        O = n(692),
        j = n.n(O),
        y = n(693),
        _ = n.n(y),
        A = n(694),
        C = n.n(A),
        E = n(695),
        w = n(40),
        x = { default: m.a, buoy: v.a, beacon: j.a, question: C.a, search: _.a },
        S = { chatAgent: {}, hasNotifications: !1, icon: "default", isLoading: !1, isOpened: !1, isPlaceholder: !1, labels: {}, nodeRef: function() {}, onMount: function() {}, onMouseOver: function() {}, type: "icon", updateFrameHeight: function() {}, updateFrameWidth: function() {} },
        T = function(e) {
            function t() { var e; return Object(a.a)(this, t), e = n.call(this), e.setNodeRef = function(t) { e._button = t, e.props.nodeRef(t) }, e.state = { height: d.b, width: d.b }, e }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e, t = this,
                        n = this.props.onMount;
                    if (n(), k(this.props.type)) {
                        var a = function n() {
                            if (!t.maybeUpdateFrameSize()) return cancelAnimationFrame(e);
                            e = requestAnimationFrame(n)
                        };
                        e = requestAnimationFrame(a)
                    }
                }
            }, { key: "componentDidUpdate", value: function() { this.maybeUpdateFrameSize() } }, {
                key: "maybeUpdateFrameSize",
                value: function() {
                    if (k(this.props.type) && this._button) {
                        var e = this._button.clientHeight,
                            t = this._button.clientWidth,
                            n = this.maybeUpdateFrameHeight(e),
                            a = this.maybeUpdateFrameWidth(t);
                        return n || a
                    }
                }
            }, {
                key: "maybeUpdateFrameHeight",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.b,
                        t = this.props,
                        n = t.type,
                        a = t.updateFrameHeight;
                    return !!k(n) && (this.state.height !== e ? (this.setState({ height: e }), a(e), !0) : void 0)
                }
            }, {
                key: "maybeUpdateFrameWidth",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.b,
                        t = this.props,
                        n = t.type,
                        a = t.updateFrameWidth;
                    return !!k(n) && (this.state.width !== e ? (this.setState({ width: e }), a(e), !0) : void 0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.chatAgent,
                        n = e.hasNotifications,
                        a = e.hideFABLabelOnMobile,
                        r = e.icon,
                        i = e.isLoading,
                        o = e.isOpened,
                        c = e.isPlaceholder,
                        u = e.labels,
                        b = e.onClick,
                        h = e.onMouseOver,
                        m = e.text,
                        g = e.textAlign,
                        v = e.type,
                        O = t && (t.photo || t.displayName) && n && !o,
                        j = Object(w.b)(),
                        y = j && a,
                        _ = !(v !== d.g || !m),
                        A = !(v !== d.e || !m) && !y,
                        C = A && "left" === g,
                        S = x[r] || x.default,
                        T = m && k(v),
                        I = m;
                    v === d.g && o && (I = t && t.id ? u.beaconButtonChatMinimize : u.beaconButtonClose);
                    var M = O ? l.a.createElement(E.a, { className: "c-FabButton__avatar", name: t.displayName, image: t.photo, isVisible: !o, size: "lg", title: u.beaconButtonChatOpen, version: 2 }) : l.a.createElement(E.c, { className: "c-FabButton__icon--icon", dangerouslySetInnerHTML: { __html: S }, isPlaceholder: c, isTextOnly: _, isTextAlignLeft: C, isVisible: !o }),
                        N = l.a.createElement(E.c, { className: "c-FabButton__icon--close", dangerouslySetInnerHTML: { __html: p.a }, isTextOnly: _, isTextAlignLeft: C, isVisible: o }),
                        L = o ? "Close Beacon popover" : "Open Beacon popover";
                    return c ? l.a.createElement(E.d, null, M) : l.a.createElement(E.b, { isLoading: i, isTextOnly: _, isTextAndIcon: A, hasAvatar: O, onClick: b, onMouseOver: h, ref: this.setNodeRef, "aria-label": L, "aria-expanded": o, "aria-controls": f.b }, M, N, function() { var e = v === d.e && y; return O || !T || e ? null : l.a.createElement(E.e, { className: "c-FabButton__text", isTextOnly: _, isTextAlignLeft: C }, l.a.createElement(s.a, { type: "end", limit: 40 }, I)) }())
                }
            }]), t
        }(u.Component),
        k = function(e) { return e === d.g || e === d.e };
    T.defaultProps = S, t.a = T
}, function(e, t) { e.exports = '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.707.293a.999.999 0 0 0-1.414 0L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7l5.293-5.293a.999.999 0 0 0 0-1.414" fill="#FFF" fill-rule="evenodd"/></svg>' }, function(e, t) { e.exports = '<svg width="24" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.347 20.871l-.003-.05c0 .017.001.034.003.05zm-.243-4.278a2 2 0 0 1 .513-1.455c1.11-1.226 1.383-2.212 1.383-4.74C22 5.782 18.046 2 13.125 2h-2.25C5.954 2 2 5.78 2 10.399c0 4.675 4.01 8.626 8.875 8.626h2.25c.834 0 1.606-.207 3.212-.798a2 2 0 0 1 1.575.083l2.355 1.161-.163-2.878zM10.875 0h2.25C19.13 0 24 4.656 24 10.399c0 2.6-.25 4.257-1.9 6.08l.243 4.279c.072.845-.807 1.471-1.633 1.162l-3.682-1.816c-1.212.446-2.527.921-3.903.921h-2.25C4.869 21.025 0 16.142 0 10.4 0 4.656 4.869 0 10.875 0z" fill="#FFF"/></svg>' }, function(e, t) { e.exports = '<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M26.244 21.523l-4.356-4.355a7.192 7.192 0 0 0 0-4.345l4.356-4.355a12.98 12.98 0 0 1 0 13.055zm-.4 3.215l-1.1 1.1a.557.557 0 0 1-.786 0l-4.884-4.884a7.27 7.27 0 0 0 1.885-1.886l4.885 4.885a.55.55 0 0 1 0 .785zM8.471 26.236l4.355-4.354a7.197 7.197 0 0 0 4.347 0l4.355 4.354a12.983 12.983 0 0 1-13.057 0zm-2.43-.398a.556.556 0 0 1-.786 0l-1.1-1.1a.556.556 0 0 1 0-.786l4.884-4.884a7.275 7.275 0 0 0 1.887 1.886L6.04 25.838zm-2.285-4.315a12.98 12.98 0 0 1 0-13.055l4.355 4.354a7.192 7.192 0 0 0 0 4.347l-4.355 4.354zm.399-16.27l1.1-1.1a.554.554 0 0 1 .785 0l4.886 4.884a7.27 7.27 0 0 0-1.887 1.885L4.155 6.039a.556.556 0 0 1 0-.786zm17.373-1.5l-4.355 4.355a7.229 7.229 0 0 0-4.347 0L8.471 3.754a12.99 12.99 0 0 1 13.057 0zm-1.305 11.242A5.228 5.228 0 0 1 15 20.217a5.228 5.228 0 0 1-5.224-5.222A5.228 5.228 0 0 1 15 9.773a5.23 5.23 0 0 1 5.223 5.222zm3.735-10.842a.556.556 0 0 1 .786 0l1.1 1.1a.553.553 0 0 1 0 .786l-4.884 4.883a7.302 7.302 0 0 0-1.886-1.885l4.884-4.884zm3.688 2.786c.23-.39.362-.83.362-1.293 0-.683-.266-1.325-.75-1.807l-1.098-1.1a2.555 2.555 0 0 0-3.101-.387 14.985 14.985 0 0 0-16.125.004c-.973-.548-2.284-.426-3.093.383l-1.101 1.1a2.533 2.533 0 0 0-.387 3.1 14.97 14.97 0 0 0 0 16.114 2.553 2.553 0 0 0 .387 3.099l1.1 1.1A2.549 2.549 0 0 0 5.649 28a2.55 2.55 0 0 0 1.293-.361A14.961 14.961 0 0 0 15 30.002a14.97 14.97 0 0 0 8.059-2.363c.398.234.844.36 1.292.36.655 0 1.31-.25 1.809-.747l1.099-1.1a2.531 2.531 0 0 0 .387-3.1 14.963 14.963 0 0 0 0-16.113z" fill="#FFF" fill-rule="evenodd"/></svg>' }, function(e, t) { e.exports = '<svg width="28" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M14.002 12a3.01 3.01 0 0 0-3.015 3c0 1.654 1.353 3 3.015 3a3.01 3.01 0 0 0 3.014-3c0-1.654-1.353-3-3.014-3m-1.005 7.9c-2.29-.465-4.019-2.485-4.019-4.9 0-2.757 2.254-5 5.024-5s5.023 2.243 5.023 5c0 2.415-1.729 4.435-4.019 4.9V25c0 .552-.45 1-1.004 1a1.003 1.003 0 0 1-1.005-1v-5.1zm9.36-7.345c-.393 0-.768-.232-.928-.617A8.019 8.019 0 0 0 14.001 7a8.018 8.018 0 0 0-7.426 4.936c-.213.51-.8.753-1.314.54a1 1 0 0 1-.543-1.307A10.024 10.024 0 0 1 14 5c4.078 0 7.722 2.422 9.284 6.17a.998.998 0 0 1-.927 1.385M1.005 10.637a1.005 1.005 0 0 1-.928-1.384C2.422 3.632 7.887 0 14.001 0c6.111 0 11.576 3.629 13.922 9.246a.998.998 0 0 1-.542 1.307 1.006 1.006 0 0 1-1.313-.54C24.033 5.146 19.298 2 14.001 2 8.703 2 3.965 5.148 1.933 10.02c-.16.385-.535.617-.928.617" fill="#FFF" fill-rule="evenodd"/></svg>' }, function(e, t) { e.exports = '<svg width="23" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.79 15.46C17.184 13.982 18 12.07 18 10a8 8 0 1 0-8 8c1.676 0 3.24-.544 4.578-1.488l.659-.465.554-.588zm6.41 6.326a.999.999 0 0 1-.002 1.412.999.999 0 0 1-1.412.002l-5.095-5.094C14.064 19.256 12.142 19.997 10 20c-5.515.008-10.008-4.485-10-10C.008 4.485 4.485.008 10 0c5.515-.008 10.008 4.485 10 10-.004 2.652-1.105 5-2.794 6.791l4.994 4.995zM14 9c0-1.654-1.346-3-3-3a1 1 0 0 1 0-2c2.757 0 5 2.243 5 5a1 1 0 0 1-2 0z" fill="#FFF"/></svg>' }, function(e, t) { e.exports = '<svg  width="16" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.98785 17.5656L6.01976 15.4805C6.01976 14.9458 6.12612 14.5288 6.33882 14.2294C6.59407 13.652 7.03012 13.2243 7.64698 12.9463C8.2851 12.6469 9.0083 12.3154 9.81659 11.9519C10.8589 11.5669 11.6671 11.0216 12.2415 10.3159C12.8158 9.58879 13.1029 8.59437 13.1029 7.33264C13.1029 5.9212 12.635 4.81985 11.6991 4.02859C10.7631 3.21595 9.55071 2.80962 8.06175 2.80962C6.59407 2.80962 5.38164 3.10902 4.42445 3.70781C3.48854 4.3066 3.02058 5.26894 3.02058 6.59484H0.5C0.5 4.64877 1.17003 3.15179 2.51009 2.10391C3.87142 1.03464 5.7326 0.5 8.09366 0.5C9.60388 0.5 10.912 0.799396 12.0181 1.39819C13.1455 1.99698 14.0176 2.82032 14.6344 3.8682C15.2513 4.91608 15.5384 6.09228 15.4959 7.39679C15.4746 9.10763 15.0705 10.487 14.2835 11.5349C13.4964 12.5614 12.3372 13.3954 10.8057 14.037C10.1463 14.3364 9.64642 14.5716 9.30609 14.7427C8.96576 14.9138 8.73178 15.1062 8.60416 15.3201C8.47653 15.5126 8.40209 15.7799 8.38082 16.122C8.38082 16.4642 8.38082 16.9454 8.38082 17.5656H5.98785ZM7.16838 23.5C6.7217 23.5 6.32819 23.3396 5.98785 23.0188C5.66879 22.6767 5.50926 22.281 5.50926 21.8319C5.50926 21.3615 5.66879 20.9658 5.98785 20.645C6.32819 20.3243 6.7217 20.1639 7.16838 20.1639C7.61507 20.1639 7.99794 20.3243 8.317 20.645C8.63606 20.9658 8.80623 21.3615 8.8275 21.8319C8.8275 22.281 8.65734 22.6767 8.317 23.0188C7.99794 23.3396 7.61507 23.5 7.16838 23.5Z" fill="#FFF"/></svg>\n' }, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return O }), n.d(t, "d", function() { return j }), n.d(t, "e", function() { return y }), n.d(t, "c", function() { return _ }), n.d(t, "a", function() { return A });
    var a, r, i, o, c, s = n(15),
        u = n(161),
        l = n.n(u),
        d = n(14),
        f = n.n(d),
        b = n(10),
        p = (n.n(b), n(62)),
        h = "".concat(p.b, "px"),
        m = "".concat(p.d, "px"),
        g = "".concat(p.c, "px"),
        v = "\n  appearance: none;\n  align-items: center;\n  border-radius: 200px;\n  bottom: 0;\n  display: block;\n  height: ".concat(h, ";\n  justify-content: center;\n  margin: 0;\n  line-height: ").concat(h, ";\n  outline: none;\n  padding: 0;\n  position: relative;\n  user-select: none;\n  z-index: 999;\n\n  /* IE11 */\n  @media all and (-ms-high-contrast:none) {\n    display: block;\n  }\n"),
        O = f()("button")(a || (a = Object(s.a)(["\n  ", "\n  background-color: ", ";\n  border: none;\n  color: white;\n  cursor: pointer;\n  min-width: ", ";\n  transition: background-color 200ms linear, transform 200ms linear;\n  -webkit-tap-highlight-color: transparent;\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    background-color: ", ";\n    box-shadow: inset 0 0 0 30px rgba(0, 0, 0, 0.06);\n  }\n\n  :active {\n    background-color: ", ";\n    box-shadow: inset 0 0 0 30px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    transform: scale(0.96);\n  }\n\n  ::-moz-focus-inner {\n    border: 0;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), v, function(e) { return Object(b.getThemeBrandProp)(e, "backgroundColorUI") }, h, function(e) { return Object(b.getThemeBrandProp)(e, "backgroundColorUIHover") }, function(e) { return Object(b.getThemeBrandProp)(e, "backgroundColorUIActive") }, function(e) { return e.isLoading && "\n    background-color: ".concat(Object(b.getThemeBrandProp)(e, "backgroundColorUIActive"), ";\n    box-shadow: inset 0 0 0 30px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    transform: scale(0.96);\n  ") }, function(e) { return e.isTextOnly && "\n    height: ".concat(m, ";\n    line-height: ").concat(m, ";\n    text-align: center;\n  ") }, function(e) { return e.isTextAndIcon && "\n    height: ".concat(g, ";\n    line-height: ").concat(g, ";\n  ") }, function(e) { return e.hasAvatar && "\n    height: 60px;\n  " }),
        j = f()("div")(r || (r = Object(s.a)(["\n  ", " background-color: white;\n  border: 2px dashed ", ";\n  width: ", ";\n"])), v, Object(b.getColor)("grey.500"), h),
        y = f()("span")(i || (i = Object(s.a)(["\n  color: ", ";\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0 20px 0 54px;\n  white-space: nowrap;\n\n  ", ";\n\n  ", ";\n"])), function(e) { return Object(b.getThemeBrandProp)(e, "textColor") }, function(e) { return e.isTextOnly && "\n    padding: 0 15px;\n  " }, function(e) { return e.isTextAlignLeft && "\n    padding: 0 54px 0 20px;\n  " }),
        _ = f()("span")(o || (o = Object(s.a)(["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  opacity: 0;\n  transform: rotate(30deg) scale(0);\n  pointer-events: none;\n  position: absolute;\n  text-indent: -99999px;\n  top: 0;\n  transition: opacity linear 80ms, transform linear 160ms;\n  width: ", ";\n  will-change: opacity, transform;\n\n  path {\n    fill: currentColor;\n  }\n\n  &.c-FabButton__icon--close {\n    transform: rotate(30deg) scale(1);\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), function(e) { return Object(b.getThemeBrandProp)(e, "textColor") }, h, function(e) { return e.isVisible && "\n    opacity: 1!important;\n    transform: rotate(0) scale(1)!important;\n  " }, function(e) { return e.isTextOnly && "\n    display: none;\n  " }, function(e) { return e.isTextAlignLeft && "\n    left: auto;\n    right: 0;\n  " }, function(e) { return e.isPlaceholder && "\n    color: ".concat(Object(b.getColor)("grey.500"), ";\n    width: 56px;\n  ") }),
        A = f()(l.a)(c || (c = Object(s.a)(["\n  color: transparent;\n  height: calc(", " * 1px) !important;\n  margin-left: 2px;\n  opacity: ", ";\n  position: relative;\n  transition: all 60ms linear;\n  width: calc(", " * 1px) !important;\n  z-index: 1;\n\n  .c-Avatar__crop {\n    /* Removes Avatar shadow, allowing the iFrame's shadow to render */\n    box-shadow: none !important;\n  }\n\n  .c-Avatar__cropBorder {\n    /* Minor adjustments to improve Fab color clipping */\n    border-width: 2.5px;\n    transform: scale(1.009);\n  }\n"])), p.a, function(e) { return e.isVisible ? 1 : 0 }, p.a)
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        i = n(697),
        o = { isAgentConnected: !1 },
        c = function(e) { var t = e.isAgentConnected; return r.a.createElement(i.a, { isAgentConnected: t }) };
    c.defaultProps = o, t.a = c
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = n(10),
        s = (n.n(c), o.a.div(a || (a = Object(r.a)(["\n  background: #4bc27d;\n  border: 2px solid white;\n  border-radius: 999px;\n  bottom: 1px;\n  box-sizing: border-box;\n  box-shadow: 0 0 0 2px\n    ", ";\n  height: 14px;\n  position: absolute;\n  right: 1px;\n  width: 14px;\n  z-index: 1000;\n\n  ", ";\n"])), function(e) { return Object(c.getThemeBrandProp)(e, "backgroundColorUI") }, function(e) { return e.isAgentConnected && "\n    bottom: -4px;\n    box-shadow: 0px 3px 8px rgb(0,0,0,0.2);\n    right: -4px;\n  " }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return d });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = n(10),
        s = (n.n(c), n(99)),
        u = function(e) { return e.dimensions.height / 2 - 125 },
        l = function(e) { return e.dimensions.width / 2 - 125 },
        d = o()("div")(a || (a = Object(r.a)(["\n  border: none;\n  bottom: ", "px;\n  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);\n  position: fixed;\n  right: ", "px;\n  top: auto;\n  transition: box-shadow 250ms ease, opacity 0.4s ease, scale 1000ms ease-in-out,\n    transform 0.2s ease-in-out;\n\n  &:active {\n    box-shadow: none;\n  }\n\n  &.is-configDisplayLeft {\n    left: ", "px;\n    right: initial;\n  }\n\n  iframe {\n    border: none;\n    height: 100%;\n    width: 100%;\n  }\n\n  @media (max-height: ", "px) {\n    & {\n      bottom: ", "px;\n      right: ", "px;\n    }\n    &.is-configDisplayLeft {\n      left: ", "px;\n      right: initial;\n    }\n  }\n\n  &.has-pulseAnimation {\n    ::before {\n      animation: puff-out-center 2s cubic-bezier(0.165, 0.84, 0.44, 1) both;\n      animation-delay: 0.2s;\n      background: ", ";\n      border-radius: ", "px;\n      bottom: ", "px;\n      content: '';\n      height: ", "px;\n      opacity: 1;\n      pointer-events: none;\n      position: absolute;\n      right: ", "px;\n      width: ", "px;\n      will-change: transform;\n      z-index: -1;\n    }\n\n    @keyframes puff-out-center {\n      0% {\n        transform: scale(0.2);\n        opacity: 0.5;\n      }\n      100% {\n        transform: scale(1);\n        opacity: 0;\n      }\n    }\n  }\n"])), 40, 40, 40, s.d, 10, 20, 20, function(e) { return Object(c.getThemeBrandProp)(e, "brandColor") }, 250, u, 250, l, 250)
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(93),
        s = n.n(c),
        u = n(0),
        l = n.n(u),
        d = n(17),
        f = n(12),
        b = n(90),
        p = n(24),
        h = n(76),
        m = n(700),
        g = n(133),
        v = n(701),
        O = n.n(v),
        j = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.state = { isRendered: !1 }, e._isMounted = !1, e.modalRenderToNode = null, e.handleModalOnOpen = function() { setTimeout(function() { e.focusFrame() }, 0) }, e.handleModalOnClose = function() { e.safeSetState({ isRendered: !1 }), e.props.toggleFullScreen() }, e.handleFrameContentDidMount = function() { e.setState({ isRendered: !0 }) }, e.setRootNodeRef = function(t) { return e.rootNode = t }, e.setModalRenderToNode = function(t) { return e.modalRenderToNode = t }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{ key: "componentDidMount", value: function() { this._isMounted = !0 } }, { key: "componentWillUnmount", value: function() { this.modalRenderToNode = null, this.rootNode = null, this._isMounted = !1 } }, { key: "safeSetState", value: function(e) { this._isMounted && this.setState(e) } }, { key: "focusFrame", value: function() { this.rootNode && this.rootNode.focus() } }, {
                key: "getFrameStyles",
                value: function() {
                    var e = this.props,
                        t = e.isOpened,
                        n = e.zIndex;
                    return { border: "none", bottom: "0", display: t ? "flex" : "none", height: t ? "100%" : "0", left: "0", position: "fixed", right: "0", top: "0", width: t ? "100%" : "0", zIndex: n }
                }
            }, {
                key: "renderModal",
                value: function() {
                    var e = this.props,
                        t = e.contents,
                        n = e.isOpened,
                        a = this.state.isRendered,
                        r = t.imageHeight,
                        i = t.imagePlaceholderUrl,
                        o = t.imageUrl,
                        c = t.imageWidth;
                    return a ? l.a.createElement(s.a, { isOpen: n, modalAnimationDuration: 250, modalAnimationEasing: "ease", overlayAnimationDuration: 250, modalAnimationSequence: "fade up", onOpen: this.handleModalOnOpen, onClose: this.handleModalOnClose, renderTo: this.modalRenderToNode, wrapperClassName: "c-FullScreenFrameModal" }, l.a.createElement(s.a.Body, null, l.a.createElement(m.a, { alt: "Full Screen", height: r, placeholderSrc: i, src: o, width: c }))) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.isOpened,
                        t = l.a.createElement("div", { style: { position: "absolute", left: 0, top: 0, visibility: "hidden", width: 0, height: 0 }, onClick: function() {} });
                    return l.a.createElement("span", null, e ? l.a.createElement(h.a, { contentDidMount: this.handleFrameContentDidMount, frameCss: O.a, frameId: "BeaconFullScreenFrame", frameStyles: this.getFrameStyles() }, l.a.createElement("div", { id: "BeaconFullScreen-root", ref: this.setRootNodeRef }, this.renderModal(), t, l.a.createElement("div", { className: "c-FullScreenFrame__modalRenderToTarget", ref: this.setModalRenderToNode }))) : null)
                }
            }]), t
        }(u.PureComponent);
    j.defaultProps = { contents: { imagePlaceholderUrl: "", imageUrl: "" }, isOpened: !1, zIndex: g.a.FullScreenFrame, toggleFullScreen: function() { return null } };
    var y = function(e) { return { contents: Object(b.b)(e), isOpened: Object(b.e)(e), zIndex: Object(f.p)(e) } },
        _ = { toggleFullScreen: p.e };
    t.a = Object(d.b)(y, _)(j)
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(18),
        i = n(6),
        o = n(7),
        c = n(108),
        s = n(8),
        u = n(9),
        l = n(300),
        d = n.n(l),
        f = n(0),
        b = n.n(f),
        p = n(21),
        h = n.n(p),
        m = n(332),
        g = ["block", "className", "dynamicResize", "makeImage", "maxDynamicResizeWidth", "maxWidth", "placeholderSrc", "restrictResponsiveSize", "src"],
        v = function(e) {
            function t(e) { var a; return Object(i.a)(this, t), a = n.call(this, e), a.state = { height: e.height, maxWidth: e.maxWidth, src: e.placeholderSrc, width: e.width }, a.fetchImage = a.fetchImage.bind(Object(c.a)(a)), a.recalculateMaxWidth = a.recalculateMaxWidth.bind(Object(c.a)(a)), a.setImageDimensions = a.setImageDimensions.bind(Object(c.a)(a)), a }
            Object(s.a)(t, e);
            var n = Object(u.a)(t);
            return Object(o.a)(t, [{ key: "UNSAFE_componentWillMount", value: function() { this.setImageDimensions(), this.recalculateMaxWidth(), this.props.dynamicResize && window.addEventListener("resize", this.recalculateMaxWidth) } }, { key: "componentDidMount", value: function() { this.fetchImage() } }, {
                key: "UNSAFE_componentWillReceiveProps",
                value: function(e) {
                    var t = e.height,
                        n = e.width;
                    t && n && (t !== this.state.height || n !== this.state.width) && this.setState({ height: t, width: n })
                }
            }, { key: "componentWillUnmount", value: function() { this.props.dynamicResize && window.removeEventListener("resize", this.recalculateMaxWidth) } }, {
                key: "recalculateMaxWidth",
                value: function() {
                    var e = this.props,
                        t = e.dynamicResize,
                        n = e.maxWidth,
                        a = e.maxDynamicResizeWidth;
                    if (t && a && n) {
                        var r = window.innerWidth * (a / 100),
                            i = r > n ? n : "calc(100vw - 80px)";
                        this.setState({ maxWidth: i })
                    }
                }
            }, {
                key: "fetchImage",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.makeImage,
                        a = t.src;
                    a && n(a).then(function() { e.setState({ src: a }) })
                }
            }, {
                key: "setImageDimensions",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.height,
                        a = t.makeImage,
                        r = t.placeholderSrc,
                        i = t.width;
                    !r || n || i || this.state.width || this.state.height || a(r).then(function(t) {
                        var n = t.height,
                            a = t.width;
                        n && a && e.setState({ height: n, width: a })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.block,
                        n = e.className,
                        i = (e.dynamicResize, e.makeImage, e.maxDynamicResizeWidth, e.maxWidth, e.placeholderSrc),
                        o = (e.restrictResponsiveSize, e.src),
                        c = Object(r.a)(e, g),
                        s = this.state,
                        u = s.height,
                        l = s.maxWidth,
                        f = s.src,
                        p = s.width,
                        m = h()("c-AsyncImage", i && o && "is-async", n),
                        v = p && u ? { height: 0, maxWidth: l, overflow: "hidden", paddingBottom: "calc(".concat(u, "/").concat(p, " * 100%)"), width: p } : null,
                        O = b.a.createElement(d.a, Object(a.a)(Object(a.a)({ block: t }, c), {}, { height: u, src: f, width: p }));
                    return b.a.createElement("div", { className: m, style: v }, O)
                }
            }]), t
        }(f.PureComponent);
    v.defaultProps = { block: !0, dynamicResize: !0, makeImage: m.a, maxDynamicResizeWidth: 80, maxWidth: 980, placeholderSrc: "", src: "" }, t.a = v
}, function(e, t, n) {
    var a = n(702);
    e.exports = "string" === typeof a ? a : a.toString()
}, function(e, t, n) { t = e.exports = n(52)(void 0), t.push([e.i, "#BeaconFullScreen-root .c-AsyncImage{background-color:#f2f2f2}@media (min-width:560px){#BeaconFullScreen-root .c-FullScreenFrameModal .c-Modal{padding:40px 20px}}#BeaconFullScreen-root .c-FullScreenFrameModal .c-Modal__Card{border:none;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05),0 5px 30px rgba(0,0,0,.2),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05),0 5px 30px rgba(0,0,0,.2),0 3px 3px 0 rgba(0,0,0,.05);max-width:1020px}", ""]) }, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(6),
        i = n(7),
        o = n(8),
        c = n(9),
        s = n(0),
        u = n.n(s),
        l = n(17),
        d = n(24),
        f = n(104),
        b = n(12),
        p = n(90),
        h = n(704),
        m = n(76),
        g = n(303),
        v = n(705),
        O = n.n(v),
        j = function(e) {
            function t() {
                var e;
                Object(r.a)(this, t);
                for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.state = { isRendered: !1 }, e._isMounted = !1, e.handleModalOnOpen = function() { setTimeout(function() { e.focusFrame() }, 0) }, e.handleModalOnClose = function() { e.safeSetState({ isRendered: !1 }), e.props.clearInlineArticle() }, e.handleFrameContentDidMount = function() { e.safeSetState({ isRendered: !0 }) }, e.handleWindowResize = function() { requestAnimationFrame(function() { return e.forceUpdate() }) }, e.setModalRef = function(t) { return e.modalRef = t }, e.setRootNodeRef = function(t) { return e.rootNode = t }, e.setModalRenderToNode = function(t) { return e.modalRenderToNode = t }, e
            }
            Object(o.a)(t, e);
            var n = Object(c.a)(t);
            return Object(i.a)(t, [{ key: "componentDidMount", value: function() { this._isMounted = !0, window.addEventListener("resize", this.handleWindowResize) } }, { key: "componentWillUnmount", value: function() { this.modalRenderToNode = null, this.rootNode = null, this._isMounted = !1, window.removeEventListener("resize", this.handleWindowResize) } }, { key: "safeSetState", value: function(e) { this._isMounted && this.setState(e) } }, { key: "focusFrame", value: function() { this.rootNode && this.rootNode.focus() } }, { key: "getDocumentObject", value: function() { return { clientWidth: document.body.clientWidth, innerHeight: window.innerHeight, scrollY: window.scrollY } } }, {
                key: "getInlineFrameStyles",
                value: function() {
                    var e = this.props,
                        t = e.isOpened,
                        n = e.inlineArticle,
                        r = e.zIndex,
                        i = n.data;
                    if (!i || !i.target) return null;
                    var o = i.target.getBoundingClientRect(),
                        c = Object(h.a)(o, this.getDocumentObject());
                    return Object(a.a)({ border: "none", position: "absolute", display: t ? "flex" : "none", height: t ? c.maxHeight : "0", width: t ? c.maxWidth : "0", zIndex: r }, c)
                }
            }, {
                key: "getModalFrameStyles",
                value: function() {
                    var e = this.props,
                        t = e.isOpened,
                        n = e.zIndex;
                    return { border: "none", bottom: "0", display: t ? "flex" : "none", height: t ? "100%" : "0", left: "0", position: "fixed", right: "0", top: "0", width: t ? "100%" : "0", zIndex: n }
                }
            }, {
                key: "getSidebarFrameStyles",
                value: function() {
                    var e = this.props,
                        t = e.isOpened,
                        n = e.zIndex;
                    return { border: "none", bottom: "0", display: t ? "flex" : "none", height: t ? "calc(100% + 15px)" : "0", position: "fixed", right: "".concat(f.d, "px"), top: "".concat(f.e, "px"), width: t ? "".concat(f.f, "px") : "0", zIndex: n }
                }
            }, {
                key: "getFrameStyles",
                value: function() {
                    switch (this.props.inlineArticle.type) {
                        case f.a.INLINE:
                            return this.getInlineFrameStyles();
                        case f.a.SIDEBAR:
                            return this.getSidebarFrameStyles();
                        case f.a.MODAL:
                        default:
                            return this.getModalFrameStyles()
                    }
                }
            }, {
                key: "getModalClassName",
                value: function(e, t) {
                    var n = "c-Article--".concat(e);
                    if (t && t.target) {
                        var a = t.target.getBoundingClientRect(),
                            r = this.getDocumentObject(),
                            i = Object(h.b)(a, r),
                            o = Object(h.c)(a, r);
                        n += " is-".concat(i, " is-").concat(o)
                    }
                    return n
                }
            }, {
                key: "renderModal",
                value: function() {
                    var e = this.props.inlineArticle,
                        t = e.id,
                        n = e.data,
                        a = e.type,
                        r = this.state.isRendered,
                        i = this.getModalClassName(a, n);
                    return r && this.modalRenderToNode ? u.a.createElement(g.a, { match: { params: { id: t } }, renderTo: this.modalRenderToNode, onClose: this.handleModalOnClose, className: i }) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.isOpened,
                        t = this.getFrameStyles();
                    return u.a.createElement("span", null, e ? u.a.createElement(m.a, { contentDidMount: this.handleFrameContentDidMount, frameCss: O.a, frameId: "BeaconInlineArticlesFrame", frameStyles: t }, u.a.createElement("div", { id: "BeaconInline-root", ref: this.setRootNodeRef }, this.renderModal(), u.a.createElement("div", { ref: this.setModalRenderToNode }))) : null)
                }
            }]), t
        }(s.PureComponent);
    j.defaultProps = { inlineArticle: {}, isOpened: !1 };
    var y = function(e) { var t = Object(p.c)(e); return { isOpened: null !== t.id, zIndex: Object(b.p)(e) - 1, inlineArticle: t, history: e.history } },
        _ = { clearInlineArticle: d.a };
    t.a = Object(l.b)(y, _)(j)
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return i }), n.d(t, "c", function() { return o }), n.d(t, "a", function() { return c });
    var a = n(5),
        r = n(104),
        i = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!e) return null; var n = t.clientWidth; return n - e.right >= r.c ? "left" : e.left >= r.c ? "right" : n - e.right >= r.c / 2 && e.left >= r.c / 2 ? "center" : "full" },
        o = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!e) return null; var n = t.innerHeight; return e.top < r.b / 2 ? "top" : n - e.bottom < r.b / 2 ? "bottom" : "center" },
        c = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = i(e, t),
                c = o(e, t),
                s = "".concat(c, "-").concat(n),
                u = t.scrollY,
                l = { top: 0, left: 0, bottom: "auto", right: "auto", maxWidth: "".concat(r.c, "px"), maxHeight: "".concat(r.b, "px") },
                d = e.top + u + e.height / 2 - 10,
                f = e.bottom + u + 4,
                b = d - r.b / 2 + 22,
                p = e.top + u - r.b + 6,
                h = e.left - 15,
                m = e.right - e.width / 2 - r.c / 2,
                g = e.right - r.c + 15;
            switch (s) {
                case "top-left":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: f, left: h });
                case "top-center":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: f, left: m });
                case "top-right":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: f, left: g });
                case "center-left":
                case "center-center":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: b, left: e.right });
                case "center-right":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: b, left: e.left - r.c - 4 });
                case "bottom-left":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: p, left: h });
                case "bottom-center":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: p, left: m });
                case "bottom-right":
                    return Object(a.a)(Object(a.a)({}, l), {}, { top: p, left: g });
                default:
                    return { left: 0, right: 0, top: 0, bottom: 0, maxWidth: "100%", maxHeight: "100%" }
            }
        }
}, function(e, t, n) {
    var a = n(706);
    e.exports = "string" === typeof a ? a : a.toString()
}, function(e, t, n) { t = e.exports = n(52)(void 0), t.push([e.i, ".c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:20px -20px;position:relative;max-width:calc(100% + 40px)}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview .noBdr+button{display:none}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview dl,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ol,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ul{display:block;margin-left:0;margin-right:0;width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview dl .c-Content__imagePreview__image img,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ol .c-Content__imagePreview__image img,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview ul .c-Content__imagePreview__image img{max-width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview:active .c-Content__imagePreview__button,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview:focus .c-Content__imagePreview__button,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview:hover .c-Content__imagePreview__button{opacity:1;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px)}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__image{width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__image img{display:block;height:auto;margin:0;max-width:100%}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button{border-radius:36px;border:0;bottom:7px;-webkit-box-shadow:inset 0 0 0 99999px transparent,0 4px 7px rgba(0,0,0,.1);box-shadow:inset 0 0 0 99999px transparent,0 4px 7px rgba(0,0,0,.1);color:#fff;height:36px;left:12px;opacity:0;padding:7px;position:absolute;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1);-o-transition:all .5s cubic-bezier(.23,1,.32,1);transition:all .5s cubic-bezier(.23,1,.32,1);width:36px;will-change:opacity}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:hover{color:#fff}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:active,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:focus,.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:hover{-webkit-box-shadow:inset 0 0 0 99999px rgba(0,0,0,.1),0 4px 7px rgba(0,0,0,.1);box-shadow:inset 0 0 0 99999px rgba(0,0,0,.1),0 4px 7px rgba(0,0,0,.1)}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button:focus{outline:none}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview__button svg{pointer-events:none}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview--no-preview{cursor:default}.c-Article #fullArticle.c-Article__contentBody .c-Content__imagePreview--no-preview .c-Content__imagePreview__button{display:none}html{overflow:hidden;width:100%}body,html{height:100%;margin:0;padding:0}", ""]) }, function(e, t, n) {
    "use strict";
    var a = n(708);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var a = n(17),
        r = n(37),
        i = n(59),
        o = n(24),
        c = n(64),
        s = n(56),
        u = n(277),
        l = n(111),
        d = n(278),
        f = n(62),
        b = n(12),
        p = n(54),
        h = n(711),
        m = function(e, t) {
            var n = e.chat,
                a = e.config,
                r = e.status,
                i = a.enableSounds,
                o = n.notifications,
                c = r.isOpened,
                s = Object(b.i)(e),
                u = Object(b.j)(e),
                d = Object(p.b)(e),
                h = Object(p.e)(e),
                m = Object(b.E)(e),
                g = o.length > 0,
                v = !g && u === f.f,
                O = (g || null !== d || null !== h) && !c;
            return { enableSounds: i, message: d, isBottomAligned: v, isDisplayLeft: s, isOpened: c, isMessagePreviewActionsEnabled: Object(l.d)(e), isVisible: O, notifications: o, previewMessage: h, zIndex: m }
        },
        g = { checkChatAvailability: u.a, clearActiveMessage: c.a, clearNotifications: s.g, clearPreviewMessage: c.b, messageClicked: i.c, messageClosed: i.d, messageTriggered: i.e, postMessageEvent: c.e, push: r.b, search: d.b, setChatMessageId: s.u, toggleBeacon: o.c };
    t.a = Object(a.b)(m, g)(h.a)
}, function(e, t, n) {
    "use strict";

    function a() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return Object.keys(e).sort().map(function(t) { if ("attributes" !== t) return [t, e[t]]; var n = e[t]; return [t, Object.keys(n).sort().map(function(e) { return [e, n[e]] })] }) }

    function r() { var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; try { e = a(t) } catch (e) { return null } return o()(JSON.stringify(e)) }
    var i = n(710),
        o = n.n(i);
    t.a = r
}, , function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(0),
        s = n.n(c),
        u = n(160),
        l = n.n(u),
        d = n(1),
        f = n.n(d),
        b = n(103),
        p = n(76),
        h = n(712),
        m = n.n(h),
        g = n(714),
        v = n(48),
        O = n(40),
        j = l()({ loader: function() { return n.e(1).then(n.bind(null, 770)) }, loading: function() { return null } }),
        y = { clearNotifications: function() {}, enableSounds: !0, isDisplayLeft: !1, isMessagePreviewActionsEnabled: !1, isOpened: !1, notifications: [], toggleBeacon: function() {} },
        _ = function(e) {
            function t() {
                var e;
                Object(a.a)(this, t);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return e = n.call.apply(n, [this].concat(i)), e.state = { height: 0 }, e.handleOnDismiss = function() {
                    (0, e.props.toggleBeacon)(!0)
                }, e.handleOpenArticle = function(t) {
                    var n = e.context.store;
                    Object(b.a)({ store: n }, t)
                }, e.handleSearch = function(t) { var n = e.props.search; return setTimeout(function() { return n(t) }, 200) }, e.handleMessage = function() { return (0, e.props.push)(v.f) }, e.handleChat = function(t) {
                    var n = e.props,
                        a = n.push;
                    return (0, n.setChatMessageId)(t), a(v.p + v.d)
                }, e.updateFrameHeight = function(t) { e.setState({ height: t }) }, e
            }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.checkChatAvailability,
                        n = e.clearActiveMessage,
                        a = e.clearNotifications,
                        r = e.clearPreviewMessage,
                        i = e.enableSounds,
                        o = e.message,
                        c = e.isBottomAligned,
                        u = e.isDisplayLeft,
                        l = e.isOpened,
                        d = e.isMessagePreviewActionsEnabled,
                        f = e.isVisible,
                        b = e.messageClicked,
                        h = e.messageClosed,
                        v = e.messageTriggered,
                        y = e.notifications,
                        _ = e.postMessageEvent,
                        A = e.previewMessage,
                        C = e.zIndex,
                        E = this.state.height,
                        w = { className: "BeaconNotificationsFrame", isBottomAligned: c, isDisplayLeft: u, isMobile: Object(O.b)(), height: E, zIndex: C };
                    return f && s.a.createElement(g.a, w, s.a.createElement(p.a, { extraHead: '\n  <style>\n  @import url("https://fonts.googleapis.com/css?family=Barlow:500&display=swap");\n  </style>\n', frameCss: m.a }, s.a.createElement("div", { id: "BeaconNotifications-root" }, s.a.createElement(j, { enableSounds: i, message: o, onChat: this.handleChat, onClick: this.handleOnDismiss, onMessage: this.handleMessage, onOpenArticle: this.handleOpenArticle, onSearch: this.handleSearch, isAlignLeft: u, isOpened: l, isMessagePreviewActionsEnabled: d, updateFrameHeight: this.updateFrameHeight, messageClicked: b, messageClosed: h, messageTriggered: v, postMessageEvent: _, notifications: y, previewMessage: A, checkChatAvailability: t, clearActiveMessage: n, clearNotifications: a, clearPreviewMessage: r }))))
                }
            }]), t
        }(c.PureComponent);
    _.contextTypes = { store: f.a.object }, _.defaultProps = y, t.a = _
}, function(e, t, n) {
    var a = n(713);
    e.exports = "string" === typeof a ? a : a.toString()
}, function(e, t, n) { t = e.exports = n(52)(void 0), t.push([e.i, "#BeaconNotifications-root{position:fixed;bottom:10px;left:10px;right:10px}body,html{margin:0;padding:0}body{padding:10px}", ""]) }, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return c });
    var a, r = n(15),
        i = n(14),
        o = n.n(i),
        c = o()("div")(a || (a = Object(r.a)(["\n  display: block;\n  position: fixed;\n  width: 322px;\n\n  ", ";\n\n  ", ";\n\n  @media (max-height: 740px) {\n    ", ";\n\n    ", ";\n  }\n\n  ", ";\n\n  iframe {\n    border: 0;\n    height: 100%;\n    overflow: hidden;\n    width: 100%;\n  }\n"])), function(e) {
            var t = e.height,
                n = e.isBottomAligned,
                a = e.zIndex;
            return "\n    bottom: ".concat(n ? 29 : 100, "px;\n    height: ").concat(t || 130, "px;\n    z-index: ").concat(a || 1050, ";\n  ")
        }, function(e) { return e.isDisplayLeft ? "\n    left: 29px;\n  " : "\n    right: 29px;\n  " }, function(e) { return "\n      bottom: ".concat(e.isBottomAligned ? 11 : 70, "px;\n    ") }, function(e) { return e.isDisplayLeft ? "\n      left: 11px;\n    " : "\n      right: 11px;\n    " }, function(e) { return e.isMobile && "\n    bottom: -3px!important;\n    left: 0!important;\n    right: 0!important;\n    width: 100%;\n  " })
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n, a = e.beaconId,
            s = Object(c.d)(),
            d = new L.a,
            B = new f.a,
            R = Object(j.a)(s, { push: l.b, chatBot: d, events: B }),
            D = { key: "hs-beacon-".concat(a), storage: u.a, whitelist: ["user", "timeline", "stats", "status", "auth", "chat", "messages", "docs"], transforms: [I.a, k.a, S.a, T.a, A.a, C.a, w.a, E.a], version: 0, migrate: Object(o.a)({ 0: function(e) { if (!e.greeters) return e; var t = Object(r.a)({}, e.greeters); return delete e.greeters, Object(r.a)(Object(r.a)({}, e), {}, { messages: Object(r.a)(Object(r.a)({}, t), {}, { shownGreeters: void 0, shownMessages: t.shownGreeters }) }) } }) },
            U = { key: "hs-beacon-message-".concat(a), storage: u.a, whitelist: ["message"], transforms: [x.a] },
            H = Object(o.c)(D, Object(r.a)(Object(r.a)({}, O.a), {}, { message: Object(o.d)(U, O.a.message), history: function() { return s } })),
            z = Object(i.e)(H, R),
            W = function() { return z.dispatch(Object(m.b)(e)), t ? void Object(M.a)({ store: z }, t) : z.dispatch(Object(m.a)(a)) },
            G = function() {
                var e = Object(y.h)(z.getState());
                return Object(y.q)(z.getState()) === b.d.ENDED ? z.dispatch(Object(h.t)()) : e ? z.dispatch(Object(h.m)(e)).then(function() {
                    var e = z.getState(),
                        t = Object(y.j)(e),
                        n = Object(y.v)(e);
                    !Object(y.m)(e) && !n || t || (z.dispatch(Object(l.b)(p.d)), setTimeout(function() { return z.dispatch(Object(g.c)(!0)) }, 0))
                }).catch(function() { return Promise.resolve() }) : void 0
            },
            q = function() {
                var e = Object(_.c)(z.getState());
                e && (z.dispatch(Object(g.c)(!0)), setTimeout(function() { return z.dispatch(Object(l.b)("".concat(p.b, "/").concat(e))) }, 0))
            };
        return window.beaconStore = z,
            function() { return new Promise(function(e) { n = Object(o.e)(z, {}, e) }) }().then(W).then(G).then(q).then(function() { return z.dispatch(Object(v.d)()) }).then(function() { return N.a.forEach(function(e) { return e({ store: z }) }) }).then(Object(F.a)(z)).then(function(e) { return { chatBot: d, events: B, history: s, initMessages: e, persistor: n, store: z } }).catch(function(e) { throw P.a.error("Failed to initialize Beacon", e), e })
    }
    t.a = a;
    var r = n(5),
        i = n(70),
        o = n(34),
        c = n(91),
        s = n(722),
        u = n.n(s),
        l = n(37),
        d = n(283),
        f = n.n(d),
        b = n(49),
        p = n(48),
        h = n(56),
        m = n(284),
        g = n(24),
        v = n(95),
        O = n(725),
        j = n(726),
        y = n(35),
        _ = n(50),
        A = n(728),
        C = n(729),
        E = n(730),
        w = n(731),
        x = n(733),
        S = n(734),
        T = n(735),
        k = n(736),
        I = n(737),
        M = n(287),
        N = n(739),
        L = n(745),
        P = n(16),
        F = n(746)
}, , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(37),
        r = n(35),
        i = n(285),
        o = n(12),
        c = n(111),
        s = n(50),
        u = n(163),
        l = n(54),
        d = n(299),
        f = n(301),
        b = n(90),
        p = n(26),
        h = n(135),
        m = n(36),
        g = n(41),
        v = n(134),
        O = n(87),
        j = n(307);
    t.a = { chat: r.a, chatSyncData: i.a, config: o.a, demo: c.a, docs: s.a, message: u.a, messages: l.a, reply: d.a, conversations: f.a, status: b.a, user: p.a, auth: m.a, stats: g.a, profile: v.a, timeline: h.a, ui: O.a, router: a.d, unreadMessages: j.a }
}, function(e, t, n) {
    "use strict";

    function a(e, t) { return s(Object(r.a)(Object(i.c)(e), o.a.withExtraArgument(t))) }
    t.a = a;
    var r = n(70),
        i = n(37),
        o = n(727),
        c = n(71),
        s = Object(c.a)() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : r.d
}, , function(e, t, n) {
    "use strict";
    var a = n(34),
        r = function(e, t) { return { deviceId: e.deviceId, jwt: e.jwt } },
        i = function(e, t) { return e };
    t.a = Object(a.b)(r, i, { whitelist: ["auth"] })
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(34),
        i = function(e, t) { return { id: e.id, messageBody: e.messageBody, persistedMessages: e.persistedMessages, state: e.state, subject: e.subject } },
        o = function(e, t) { var n = e.persistedMessages; return n && n.length && Array.isArray(n) ? Object(a.a)(Object(a.a)({}, e), {}, { messages: n }) : Object(a.a)(Object(a.a)({}, e), {}, { persistedMessages: Array.isArray(n) ? n : [] }) };
    t.a = Object(r.b)(i, o, { whitelist: ["chat"] })
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.article.timestamp,
            n = e.beaconIsOpened,
            a = new Date;
        return a.setMinutes(a.getMinutes() - 5), (t = new Date(t)) < a || !n
    }
    var r = n(22),
        i = n(5),
        o = n(34),
        c = n(50),
        s = function(e, t) { return { article: e.article, beaconIsOpened: e.beaconIsOpened, openedArticles: e.openedArticles } },
        u = function(e, t) {
            var n = a(e),
                o = Object(i.a)({}, e.article),
                s = Object(r.a)(e.openedArticles);
            return n ? c.m : Object(i.a)(Object(i.a)({}, e), {}, { article: o, openedArticles: Array.isArray(s) ? s : [] })
        };
    t.a = Object(o.b)(s, u, { whitelist: ["docs"] })
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(22),
        i = n(34),
        o = n(84),
        c = n(154),
        s = function(e, t) { return { shownMessages: e.shownMessages, staticConditionsState: e.staticConditionsState, syncedCustomerHash: e.syncedCustomerHash, lastSyncTimestamp: e.lastSyncTimestamp } },
        u = function(e, t) {
            var n = e.staticConditionsState,
                i = n.pageViews || 0,
                s = n.repeatPageViews || [],
                u = Object(c.a)(),
                l = Object(o.a)(s, u),
                d = [];
            return d = 0 === l ? Object(r.a)(s) : s.filter(function(e) { return e.url !== u }), d.push({ url: u, count: l + 1 }), d.length > 15 && (d = d.slice(-15)), Object(a.a)(Object(a.a)({}, e), {}, { staticConditionsState: Object(a.a)(Object(a.a)({}, n), {}, { pageViews: i + 1, repeatPageViews: d }) })
        };
    t.a = Object(i.b)(s, u, { whitelist: ["messages"] })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return a });
    var a = function(e, t) {
        if (!e || !t) return !1;
        var n = function(e) { return e.replace(/([.*+?^=!${}()|[\]/\\])/g, "\\$&") },
            a = e.split("*").map(n).join(".*");
        return new RegExp("^".concat(a, "$")).test(t)
    }
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(34),
        i = function(e) { return !1 === e.persist ? {} : Object(a.a)(Object(a.a)({}, e), {}, { attachments: [] }) },
        o = function(e) {
            var t = e.attachments,
                n = e.fields,
                r = e.text,
                i = void 0 === r ? "" : r,
                o = e.subject,
                c = void 0 === o ? "" : o;
            return Object(a.a)(Object(a.a)({}, e), {}, { text: i, subject: c, attachments: Array.isArray(t) ? t : [], fields: Array.isArray(n) ? n : [] })
        };
    t.a = Object(r.b)(i, o, { whitelist: ["message"] })
}, function(e, t, n) {
    "use strict";
    var a = n(34),
        r = function(e, t) { return { conversationCount: e.conversationCount } },
        i = function(e, t) { return e };
    t.a = Object(a.b)(r, i, { whitelist: ["stats"] })
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(34),
        i = function(e, t) { return { hasShownFabAnimation: e.hasShownFabAnimation } },
        o = function(e, t) { return Object(a.a)(Object(a.a)({}, e), {}, { hasShownFabAnimation: !0 }) };
    t.a = Object(r.b)(i, o, { whitelist: ["status"] })
}, function(e, t, n) {
    "use strict";

    function a(e) { var t = new Date; return t.setMinutes(t.getMinutes() - 120), Array.isArray(e) ? e.filter(function(e) { return e.timestamp > t }) : [] }
    var r = n(5),
        i = n(34),
        o = function(e) { return e },
        c = function(e) {
            var t = e.activity,
                n = a(t);
            return Object(r.a)(Object(r.a)({}, e), {}, { activity: n })
        };
    t.a = Object(i.b)(o, c, { whitelist: ["timeline"] })
}, function(e, t, n) {
    "use strict";
    var a = n(34),
        r = function(e, t) { return e.signature ? {} : e },
        i = function(e, t) { return e };
    t.a = Object(a.b)(r, i, { whitelist: ["user"] })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r }), n.d(t, "b", function() { return i });
    var a = n(11),
        r = function(e) { return { type: a.y, demo: e } },
        i = function() { return { type: a.z } }
}, function(e, t, n) {
    "use strict";
    var a = n(740),
        r = n(741),
        i = n(742),
        o = n(743),
        c = n(744);
    t.a = [a.a, r.a, i.a, o.a, c.a]
}, function(e, t, n) {
    "use strict";
    var a = n(73),
        r = n.n(a),
        i = n(35),
        o = n(288),
        c = function(e) {
            var t = e.store,
                n = e.start,
                a = void 0 === n ? o.a : n,
                c = e.stop,
                s = void 0 === c ? o.b : c,
                u = r()(function() { return Object(i.h)(t.getState()) }),
                l = function(e) { setTimeout(function() { t.dispatch(s()), e && t.dispatch(a(e)) }, 1) };
            t.subscribe(u(l)), l(Object(i.h)(t.getState()))
        };
    t.a = c
}, function(e, t, n) {
    "use strict";
    var a = n(73),
        r = n.n(a),
        i = n(49),
        o = n(35),
        c = n(288),
        s = function(e) {
            var t = e.store,
                n = e.stop,
                a = void 0 === n ? c.b : n,
                s = r()(function() { return Object(o.q)(t.getState()) }),
                u = function(e) { if (e === i.d.ENDED) return t.dispatch(a()) };
            t.subscribe(s(u)), u(Object(o.q)(t.getState()))
        };
    t.a = s
}, function(e, t, n) {
    "use strict";
    var a = n(73),
        r = n.n(a),
        i = n(116),
        o = n.n(i),
        c = n(26),
        s = n(72),
        u = function(e) {
            var t = e.store,
                n = e.callback,
                a = void 0 === n ? function(e) { return t.dispatch(Object(s.a)()) } : n,
                i = r()(function() { return Object(c.c)(t.getState()) }, "", o.a);
            t.subscribe(i(a))
        };
    t.a = u
}, function(e, t, n) {
    "use strict";
    var a = n(73),
        r = n.n(a),
        i = n(41),
        o = n(72),
        c = function(e) {
            var t = e.store,
                n = e.callback,
                a = void 0 === n ? function(e) { return !!e && t.dispatch(Object(o.b)()) } : n,
                c = r()(function() { return Object(i.e)(t.getState()) });
            t.subscribe(c(a))
        };
    t.a = c
}, function(e, t, n) {
    "use strict";
    var a = n(73),
        r = n.n(a),
        i = n(72),
        o = n(26),
        c = n(11),
        s = function(e) {
            var t = e.store,
                n = r()(function() { return Object(o.f)(t.getState()) }),
                a = function(e, n) { t.dispatch({ type: c._39, resetConversationCount: !!n }), t.dispatch(Object(i.a)()) };
            t.subscribe(n(a))
        };
    t.a = s
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        r = n(7),
        i = n(8),
        o = n(9),
        c = n(283),
        s = n.n(c),
        u = n(49),
        l = function(e) {
            function t() { var e; return Object(a.a)(this, t), e = n.call(this), e.timeouts = [], e }
            Object(i.a)(t, e);
            var n = Object(o.a)(t);
            return Object(r.a)(t, [{
                key: "say",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = n.typing;
                    return this.handleTyping(a).then(function() {
                        var n = t.formatMessage(e);
                        t.emit(u.b.BOT_MESSAGE, n)
                    })
                }
            }, {
                key: "handleTyping",
                value: function(e) {
                    var t = this,
                        n = 0;
                    return !0 === e ? n = 1200 : "number" === typeof e && (n = e), n ? new Promise(function(e) { t.emit(u.b.BOT_TYPING_START), t.setTimeout(function() { t.emit(u.b.BOT_TYPING_END), e() }, n) }) : Promise.resolve()
                }
            }, { key: "formatMessage", value: function(e) { return { author: { type: u.a.system }, rawBody: e, seenAt: new Date, type: u.f.message } } }, {
                key: "setTimeout",
                value: function(e) {
                    function t(t, n) { return e.apply(this, arguments) }
                    return t.toString = function() { return e.toString() }, t
                }(function(e, t) { this.timeouts.push(setTimeout(e, t)) })
            }, { key: "destroy", value: function() { this.removeAllListeners(), this.timeouts.forEach(clearTimeout) } }]), t
        }(s.a);
    t.a = l
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = e.getState(),
            a = Object(s.c)(n, t);
        if (a) return Object(s.i)(e, a.id);
        var r = Object(s.b)(n, t);
        return Object(u.a)(r, e)
    }
    var r = n(64),
        i = n(12),
        o = n(54),
        c = n(333),
        s = n(84),
        u = n(289),
        l = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
            return function() {
                var n = e.getState();
                if (!Object(i.A)(n).length) return c.a;
                var a = Object(o.k)(n);
                return a && 0 !== a.length ? function() {
                    var n = e.getState(),
                        a = Object(i.D)(n);
                    return a ? e.dispatch(Object(r.d)()).then(function() { return e.dispatch(Object(r.c)()) }).then(function() { return t(e, a) }) : t(e, a)
                } : c.a
            }
        };
    t.a = l
}, function(e, t, n) {
    "use strict";
    var a = n(16),
        r = n(103),
        i = n(277),
        o = n(748),
        c = n(749),
        s = n(287),
        u = n(750),
        l = n(751),
        d = n(752),
        f = n(753),
        b = n(279),
        p = n(754),
        h = n(755),
        m = n(756),
        g = n(757),
        v = n(758),
        O = n(759),
        j = n(218),
        y = n(760),
        _ = n(761),
        A = n(278),
        C = n(763),
        E = n(765),
        w = n(766),
        x = n(767),
        S = this,
        T = { article: r.a, checkChatAvailability: i.b, config: o.a, debug: c.a, demo: s.a, close: u.a, destroy: l.a, event: d.a, greeter: E.a, "greeter-preview": h.a, identify: f.a, init: b.b, logout: p.a, "message-preview": h.a, navigate: m.a, off: g.a, on: v.a, once: O.a, open: j.a, prefill: y.a, reset: _.a, search: A.a, "session-data": C.a, "show-message": E.a, suggest: w.a, toggle: x.a },
        k = function(e, t, n) { return function(r, i, o) { return "function" === typeof T[r] ? T[r].apply(S, [{ store: e, history: t, events: n }, i, o]) : a.a.error("Beacon Error: Invalid method ".concat(r)) } };
    t.a = k
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        r = n(284),
        i = ["beaconId"];
    t.a = function(e, t) {
        var n = e.store,
            o = (t.beaconId, Object(a.a)(t, i));
        n.dispatch(Object(r.b)(o))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(16);
    t.a = function() { a.a.debug() }
}, function(e, t, n) {
    "use strict";
    var a = n(24);
    t.a = function(e, t) { e.store.dispatch(Object(a.c)(!1)) }
}, function(e, t, n) {
    "use strict";
    var a = n(32),
        r = n.n(a),
        i = this;
    t.a = function(e, t) {
        var n = (e.store, document.getElementById("beacon-container"));
        0 !== n.getElementsByClassName("Beacon").length && (r.a.unmountComponentAtNode(n), "function" === typeof window.__onBeaconDestroy && window.__onBeaconDestroy.apply(i))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(16),
        r = n(64),
        i = n(59),
        o = n(61),
        c = n(12),
        s = n(54),
        u = n(135),
        l = n(84),
        d = n(289);
    t.a = function(e, t) {
        var n = e.store,
            c = t.type,
            u = n.getState();
        if (!c) return a.a.error("Beacon('event') error: Missing type");
        switch (c) {
            case o.h:
                var l = t.url,
                    b = t.title;
                if (!l || !b) return a.a.error("Beacon('event') error: Must supply valid url and title values");
                n.dispatch(Object(r.i)({ pageWasScrolled: !1, timeOnPagePassed: !1 }));
                var p = Object(s.i)(u);
                null !== p && (clearTimeout(p), n.dispatch(Object(r.h)(null)));
                var h = f(u, l);
                return Object(d.a)(h, n), n.dispatch(Object(i.f)({ url: l, title: b }));
            default:
                return a.a.error("Beacon('event') error: '".concat(c, "' is not a valid type"))
        }
    };
    var f = function(e, t) {
        var n = Object(u.b)(e),
            a = Object(c.D)(e),
            r = { currentUrl: t };
        if (n && n.length) {
            var i = n[n.length - 1];
            r.previousUrl = i.url
        }
        return Object(l.b)(e, a, r)
    }
}, function(e, t, n) {
    "use strict";
    var a = n(121),
        r = n(57),
        i = n(95),
        o = n(16);
    t.a = function(e, t) {
        var n = e.store,
            c = [];
        for (var s in t)
            if (function(e) { return "object" !== Object(r.a)(e) || null === e }(t[s])) switch (s) {
                case "avatar":
                    (function(e) { return e && !!e.match(/https?:\/\/.+/i) })(t[s]) || (c.push(Object(a.a)({}, s, t[s])), delete t[s]);
                    break;
                case "name":
                    t[s] = "".concat(t[s]).substring(0, 80);
                    break;
                case "company":
                case "jobTitle":
                    t[s] = "".concat(t[s]).substring(0, 60);
                    break;
                default:
                    "string" === typeof t[s] && (t[s] = "".concat(t[s]).substring(0, 200))
            } else c.push(Object(a.a)({}, s, t[s])), delete t[s];
        if (c.length) {
            var u = function(e) { o.a.error("Beacon API: ".concat(JSON.stringify(e), " is an invalid field.")) };
            c.forEach(u)
        }
        n.dispatch(Object(i.a)(t))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(37),
        r = n(56),
        i = n(95),
        o = n(11);
    t.a = function(e) {
        var t = e.store,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = n.endActiveChat,
            s = n.persistDeviceId;
        if (t.dispatch(Object(i.b)()), !0 === c) {
            var u = t.getState(),
                l = u.chat.id;
            l ? t.dispatch(Object(r.k)(l)).then(function() { t.dispatch(Object(r.t)()) }) : t.dispatch(Object(r.t)()), t.dispatch(Object(a.b)("/"))
        }!0 !== s && t.dispatch({ type: o._2 })
    }
}, function(e, t, n) {
    "use strict";
    var a = n(64);
    t.a = function(e, t) {
        var n = e.store,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = r.delay || 0;
        setTimeout(function() { n.dispatch(Object(a.g)(t)) }, i)
    }
}, function(e, t, n) {
    "use strict";
    var a = n(37),
        r = n(103),
        i = n(48),
        o = n(12),
        c = n(56),
        s = n(16),
        u = function(e) { return "/" === e.substr(-1) && e.length > 1 ? e.substr(0, e.length - 1) : e },
        l = function(e, t) {
            var n = t.getState(),
                r = n.chat,
                o = r.availableAgents;
            return o && o.data && o.data.length > 0 ? t.dispatch(Object(a.b)(i.d)) : d(t)
        },
        d = function(e) { e.dispatch(Object(a.b)(i.f)) };
    t.a = function(e, t) {
        var n = e.store,
            f = u(t),
            b = n.getState();
        return 0 !== f.indexOf(i.j) || Object(o.H)(b) ? 0 !== f.indexOf(i.c) || Object(o.J)(b) ? f === i.d ? n.dispatch(Object(c.l)()).then(function(e) { return l(0, n) }).catch(function() { return d(n) }) : 0 === f.indexOf("".concat(i.k, "/")) ? Object(r.a)({ store: n }, f.replace("".concat(i.k, "/"), "")) : void n.dispatch(Object(a.b)(f)) : s.a.error("Messaging is disabled on this Beacon, it's not possible to navigate to route ".concat(f)) : s.a.error("Docs is disabled on this Beacon, it's not possible to navigate to route ".concat(f))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(16);
    t.a = function(e, t, n) { var r = e.events; return t ? (void 0 === n && r.removeAllListeners(t), r.off(t, n)) : a.a.error("Invalid call of Beacon('off'): event attribute is required") }
}, function(e, t, n) {
    "use strict";
    var a = n(16);
    t.a = function(e, t, n) { var r = e.events; return t && n ? r.on(t, n) : a.a.error("Invalid call of Beacon('on'): event and callback attributes are required") }
}, function(e, t, n) {
    "use strict";
    var a = n(16);
    t.a = function(e, t, n) { var r = e.events; return t && n ? r.once(t, n) : a.a.error("Invalid call of Beacon('once'): event and callback attributes are required") }
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(16),
        i = n(112),
        o = function(e) { return !!(e && e.id && e.value) };
    t.a = function(e, t) {
        var n = e.store,
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            s = t.fields || [],
            u = s.filter(function(e) { return !o(e) }),
            l = s.filter(o),
            d = c.persist;
        if (n.dispatch(Object(i.j)(Object(a.a)(Object(a.a)({}, t), {}, { fields: l }), { persist: d, prefilled: !0 })), u && u.length > 0) {
            var f = function(e) { r.a.error("Beacon API: ".concat(JSON.stringify(e), " is an invalid field.")) };
            u.forEach(f), r.a.warn("For more info see the API at https://developer.helpscout.com/beacon-2/web/javascript-api/#beaconprefill-formobject or contact support@helpscout.com")
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(762);
    t.a = function(e, t) { return e.store.dispatch(Object(a.a)()) }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var a = n(11),
        r = function() { return { type: a.Z } }
}, function(e, t, n) {
    "use strict";
    var a = n(57),
        r = n(764),
        i = n(16);
    t.a = function(e, t) {
        var n = e.store;
        if ("object" !== Object(a.a)(t) || Array.isArray(t)) return i.a.error("Invalid call of Beacon('session-data'): data must be an object or null.");
        for (var o in t)
            if ("object" === Object(a.a)(t[o]) && null !== t[o]) return i.a.error("Invalid call of Beacon('session-data'): values must be strings, numbers, booleans, or null.");
        n.dispatch(Object(r.a)(t))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var a = n(11),
        r = function(e) { return { type: a._9, data: e } }
}, function(e, t, n) {
    "use strict";
    var a = n(64),
        r = n(12),
        i = n(84);
    t.a = function(e, t) {
        var n = e.store,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            c = o.delay || 3e3,
            s = n.getState(),
            u = Object(r.y)(s, t);
        if (u) {
            var l = u.conditions,
                d = u.triggerType,
                f = u.audience;
            ("manual" !== d || !l && "selected" !== f || Object(i.h)(s, u)) && setTimeout(function() { n.dispatch(Object(a.f)(t, o)) }, c)
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(33);
    t.a = function(e) {
        var t = e.store,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = t.getState(),
            i = r.config.beaconId,
            o = r.status.isOpened,
            c = n && 0 !== n.length;
        return o ? c ? t.dispatch(Object(a.g)(i, n)) : t.dispatch(Object(a.e)()) : (c && t.dispatch(Object(a.f)({ fn: a.g, suggestions: n })), void(!c && t.dispatch(Object(a.f)({ fn: a.e }))))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(24);
    t.a = function(e, t) {
        var n = e.store,
            r = n.getState();
        n.dispatch(Object(a.c)(!r.status.isOpened))
    }
}, function(e, t, n) {
    "use strict";
    var a = function() { var e = document.getElementById("beacon-container"); return e || (e = document.createElement("div"), e.id = "beacon-container", document.body.appendChild(e)), e };
    t.a = a
}], [334]);