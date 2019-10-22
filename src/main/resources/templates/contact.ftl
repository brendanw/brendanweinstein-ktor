<#import "base.ftl" as base>
<@base.page>
  <div id="content" class="main_content">
    <div class="contact_container">
      <section class="contact_left_bar">
      </section>
      <section class="form_container">
        <div class="form_container_top">

          <div class="small_container">

            <p>To: <span id="company_to_email">brendan@basebeta.com</span></p>


            <div class="gf_browser_chrome gform_wrapper" id="gform_wrapper_1">
              <div id="gf_1" class="gform_anchor" tabindex="-1"></div>
              <form method="post" enctype="multipart/form-data"
                    id="contact-form"
                    onsubmit="return false;">
                <div class="form_body">
                  <ul id="form_fields"
                      class="form_fields top_label form_sublabel_below description_below">

                    <li id="field_message"
                        class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                      <label class="gfield_label" for="input_1_3">Email<span
                                class="gfield_required">*</span></label>
                      <div class="input_container input_container_text"><input name="email"
                                                                               id="email"
                                                                               type="text"
                                                                               value=""
                                                                               class="medium"
                                                                               tabindex="1"
                                                                               placeholder="*Email"
                                                                               aria-required="true"
                                                                               aria-invalid="false">
                      </div>
                    </li>
                    <li id="field_message"
                        class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                        style="margin-top: 20px !important">
                      <label class="gfield_label" for="input_1_4">Subject<span
                                class="gfield_required">*</span></label>
                      <div class="input_container input_container_text"><input name="subject"
                                                                               id="subject"
                                                                               type="text"
                                                                               value=""
                                                                               class="medium"
                                                                               tabindex="1"
                                                                               placeholder="*Subject"
                                                                               aria-required="true"
                                                                               aria-invalid="false">
                      </div>
                    </li>
                    <li id="field_message"
                        class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                        style="margin-top: 20px !important">
                      <label class="gfield_label" for="input_1_5">Message<span
                                class="gfield_required">*</span></label>
                      <div class="input_container input_container_textarea"><textarea
                                name="message" id="message" class="textarea medium" tabindex="1"
                                placeholder="*Message" aria-required="true" aria-invalid="false"
                                rows="10" cols="50"></textarea></div>
                    </li>
                  </ul>
                </div>
                <div class="form_footer top_label"><input type="submit" id="form_submit_button"
                                                          class="form_button button" value="Send"
                                                          tabindex="1"
                                                          onclick="if(window[&quot;gf_submitting_1&quot;]){return false;}  window[&quot;gf_submitting_1&quot;]=true;  "
                                                          onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_1&quot;]){return false;} window[&quot;gf_submitting_1&quot;]=true;  jQuery(&quot;#gform_1&quot;).trigger(&quot;submit&quot;,[true]); }">
                </div>
              </form>
            </div>
          </div>

        </div>

        <div class="form_container_bottom">
          <div class="small_container">

            <p>Partners</p>

            <ul class="slash_list">
              <li><a href="https://www.gopro.com">GoPro</a></li>
              <li><a href="http://www.matterhorngolfhotel.com/">Matterhorn Golf Hotel</a></li>
              <li><a href="https://www.bayareaskydiving.com">Bay Area Skydiving</a></li>
              <li><a href="http://www.squirrel.ws" target="_blank">Squirrel</a></li>
              <li><a href="https://www.sportiva.com/">La Sportiva</a></li>
              <li><a href="http://www.basebeta.com" target="_blank">BaseBeta</a></li>
              <li><a href="http://skydanceskydiving.com/">Skydance Skydiving</a></li>
              <li><a href="https://www.vuoriclothing.com" target="_blank">Vuori</a></li>
              <li><a href="http://www.prana.com" target="_blank">Prana</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section class="contact_right_bar">
      </section>
    </div>
  </div>

  <script src="/static/js/dist/contact.js"></script>
</@base.page>