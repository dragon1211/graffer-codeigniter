
              <footer class="footer">
                <div class="container">
                  <div class="content has-text-centered is-size-7">
                    <a href="https://graffer.jp/">運営会社</a>"&nbsp;&nbsp;&nbsp;"
                    <a href="https://graffer.jp/legal/privacy-policy" target="_blank">Grafferアカウント規約</a>"&nbsp;&nbsp;&nbsp;"
                    <a href="https://graffer.jp/legal/privacy-policy" target="_blank">プライバシーポリシー及び個人情報の取り扱いについて</a>
                  </div>
                  <div class="content has-text-centered">
                    <p>Copyright © Graffer, Inc.</p>
                  </div>
                </div>
              </footer>
            </div>

              <div class="Toastify">
                <!-- <div class="Toastify__toast-container Toastify__toast-container--top-right"> -->
              </div>
            </div>
          </div>
        </div>
    </div>
</body>
<script src=<?php base_url("assets/js/jquery/jquery.min.js")?>></script>
<script src=<?php base_url("assets/js/analytics.js")?>></script>
<script src=<?php base_url("assets/js/gtm.js")?>></script>
<script src=<?php base_url("assets/js/linkid.js")?>></script>
<script src=<?php base_url("assets/js/raven.min.js")?>></script>
<script src=<?php base_url("assets/js/ytag.js")?>></script>
<script src=<?php base_url("assets/custom/validation.js")?>></script>

<script>
      function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }
    </script>
</html>