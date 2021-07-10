
<html lang="ja" class=" wf-source-sans-pro-n4-active wf-source-sans-pro-n7-active wf-source-sans-pro-i7-active wf-source-sans-pro-i4-active wf-source-han-sans-japanese-n7-active wf-source-han-sans-japanese-n9-active wf-source-han-sans-japanese-n3-active wf-source-han-sans-japanese-n4-active wf-source-han-sans-cjk-ja-n4-active wf-source-han-sans-cjk-ja-n7-active wf-active">

<head>
    <title>Graffer, Inc. 株式会社グラファー</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="kPZO6aTbrvk3zuuurYu837OVyznoJ8pMzkWqHudO">
    <meta name="description" content="株式会社グラファーのオフィシャルサイト。行政手続きを効率化するための各種ウェブサービス及びソリューションを一般消費者、事業者、官公庁等に提供しています。">
    <meta name="keywords" content="株式会社グラファー, グラファー, スタートアップ, 行政, GovTech, Government Tech">
    <meta property="og:site_name" content="株式会社グラファー">
    <meta property="og:title" content="Graffer, Inc. 株式会社グラファー">
    <meta property="og:description" content="株式会社グラファーのオフィシャルサイト。行政手続きを効率化するための各種ウェブサービス及びソリューションを一般消費者、事業者、官公庁等に提供しています。">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@Graffer_Inc">
    <meta name="twitter:title" content="Graffer, Inc. 株式会社グラファー">
    <meta name="twitter:description" content="株式会社グラファーのオフィシャルサイト。行政手続きを効率化するための各種ウェブサービス及びソリューションを一般消費者、事業者、官公庁等に提供しています。">
    <meta property="og:image" content=<?php echo base_url("assets/home/img/og-image.jpg")?>>
    
    <link rel="stylesheet" href=<?php echo base_url("assets/home/css/all.css")?>>
    <link rel="stylesheet" href=<?php echo base_url("assets/home/css/app.css")?>>
    <link rel="icon" href=<?php echo base_url("assets/home/img/favicon.png")?> type="image/x-icon">
    <script>
        (function(d) {
            var config = {
                    kitId: 'gra8aww',
                    scriptTimeout: 3000,
                    async: true
                },
                h = d.documentElement,
                t = setTimeout(function() {
                    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
                }, config.scriptTimeout),
                tk = d.createElement("script"),
                f = false,
                s = d.getElementsByTagName("script")[0],
                a;
            h.className += " wf-loading";
            tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
            tk.async = true;
            tk.onload = tk.onreadystatechange = function() {
                a = this.readyState;
                if (f || a && a != "complete" && a != "loaded") return;
                f = true;
                clearTimeout(t);
                try {
                    Typekit.load(config)
                } catch (e) {}
            };
            s.parentNode.insertBefore(tk, s)
        })(document);
    </script>
   
    <style type="text/css">
        .has-margin[data-v-23e0c47b] {
            margin-bottom: 1rem
        }
    </style>
    <style>
        .tk-source-sans-pro {
            font-family: "source-sans-pro", sans-serif;
        }
        
        .tk-source-han-sans-japanese {
            font-family: "source-han-sans-japanese", sans-serif;
        }
        
        .tk-source-han-sans-cjk-ja {
            font-family: "source-han-sans-cjk-ja", sans-serif;
        }
    </style>
    <style>
        .bootstrapiso .tooltip {
            font-size: 14px;
        }
    </style>
</head>

<body class="has-navbar-fixed-top">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9QMT2G"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="app">
        <nav role="navigation" aria-label="main navigation" xmlns:v-bind="http://www.w3.org/1999/xhtml" class="navbar is-fixed-top">
            <div class="container">
                <div class="navbar-brand">
                    <a href="index1.html" class="navbar-item"><img src=<?php echo base_url("assets/home/img/corporate_logo.svg")?> alt="Graffer, Inc." width="100" style="vertical-align: baseline !important; display: inline; margin-top: 5px;"></a> 
                    <a role="button" aria-label="menu" aria-expanded="false" class="navbar-burger">
                        <span></span> 
                        <span></span> 
                        <span></span>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a href="index2.html" class="navbar-link is-arrowless">ニュース</a>
                            <div class="navbar-dropdown">
                                <a href="news.html" class="navbar-item">ニュースリリース</a> 
                                <a href="media.html" class="navbar-item">メディア掲載</a>
                            </div>
                        </div> 
                        <a href="govtec.html" class="navbar-item">トレンド・事例</a>
                        <a href="platform.html" class="navbar-item">自治体・官公庁の方</a>
                        <a href="service.html" class="navbar-item">個人・事業者の方</a>
                        <a href="recruit.html" class="navbar-item">採用情報</a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a href="company.html" class="navbar-link is-arrowless">企業情報</a>
                            <div class="navbar-dropdown">
                                <a href="about.html" class="navbar-item">Grafferとは</a>
                                <a href="company.html" class="navbar-item">会社概要</a>
                            </div>
                        </div>
                    </div>

                    <?php if(isset($_SESSION['name'])){?>
				<div class="col s12 m6 l4">
					<div class="card ">
			            <div class="card-image">
			              <img src="<?=$_SESSION['profile_pic']?>">
			              <span class="card-title"><?=$_SESSION['name']?></span>
			            </div>
			            <div class="card-action">
			              <a href="#"><?=$_SESSION['name']?></a>
			            </div>
			        </div>
				</div>
			<?php }?>
                    <div class="navbar-end">
                        <a href="contact.html" class="navbar-item">お問い合わせ</a>

                        <?php if(!isset($_SESSION['logged_in']) || !($_SESSION['logged_in'])){ ?>
                            <a href="/login" class="navbar-item">ログイン</a>
                        <?php } 
                         else if(!isset($_SESSION['is_confirmed']) ||!$_SESSION['is_confirmed']){ ?>
                            <div class="navbar-item has-dropdown is-hoverable" >
                                <a class="navbar-link">
                                    <span class="has-text-weight-bold has-text-grey">ログイン中</span>
                                </a>
                                <div class="navbar-dropdown">
                                    <a href="/logout" class="navbar-item">ログアウト</a>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </nav>