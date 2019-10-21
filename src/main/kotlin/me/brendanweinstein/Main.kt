package me.brendanweinstein

import freemarker.cache.ClassTemplateLoader
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.ConditionalHeaders
import io.ktor.features.DefaultHeaders
import io.ktor.features.StatusPages
import io.ktor.freemarker.FreeMarker
import io.ktor.freemarker.FreeMarkerContent
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.files
import io.ktor.http.content.static
import io.ktor.http.content.staticRootFolder
import io.ktor.http.withCharset
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import java.io.File
import java.util.*
import javax.mail.*
import javax.mail.internet.InternetAddress
import javax.mail.internet.MimeMessage


val html_utf8 = ContentType.Text.Html.withCharset(Charsets.UTF_8)

val CDN_URL = "https://d3gbt3n5waomy7.cloudfront.net"

val port = Integer.valueOf(System.getenv("PORT") ?: "5001")

var server = embeddedServer(Netty, port) {
  install(DefaultHeaders)
  install(ConditionalHeaders)

  install(FreeMarker) {
    templateLoader = ClassTemplateLoader(environment.classLoader, "templates")
  }

  install(StatusPages) {
    exception<Exception> { exception ->
      call.respond(FreeMarkerContent("error.ftl", exception, "", html_utf8))
    }
  }

  install(Routing) {
    static("static") {
      staticRootFolder = File("public")
      files(".")
      files("js")
      files("media")
    }

    data class Assets(val cdnBase: String)
    data class ContactError(val type: String)

    post("/sendEmail") {
      val post = call.receiveParameters()
      val fromAddress = post["email"] ?: return@post call.respond(status = HttpStatusCode.BadRequest, message = "invalid_email")
      val subject = post["subject"] ?: return@post call.respond(status = HttpStatusCode.BadRequest, message = "invalid_subject")
      val message = post["message"] ?: return@post call.respond(status = HttpStatusCode.BadRequest, message = "invalid_message")
      sendEmail(fromAddress = fromAddress, subject = subject, message = message)
      call.respond(status= HttpStatusCode.OK, message = Any())
    }

    get("/about") {
      val freeMarkerContent = FreeMarkerContent("about.ftl", model = mapOf("assets" to Assets(CDN_URL)))
      call.respond(freeMarkerContent)
    }

    get("/contact") {
      val freeMarkerContent = FreeMarkerContent("contact.ftl", model = mapOf("assets" to Assets(CDN_URL)))
      call.respond(freeMarkerContent)
    }

    get("/motion") {
      val freeMarkerContent = FreeMarkerContent("motion.ftl", model = mapOf("assets" to Assets(CDN_URL)))
      call.respond(freeMarkerContent)
    }

    get("error") {
      throw IllegalStateException("An invalid place to be …")
    }

    get("/") {
      call.respond(FreeMarkerContent("index.ftl", model = mapOf("assets" to Assets(CDN_URL))))
    }
  }
}

fun sendEmail(fromAddress: String, subject: String, message: String) {
  val username = System.getenv("BASEBETA_USERNAME")
  val password = System.getenv("BASEBETA_PASSWORD")
  val newSubject = "$fromAddress: $subject"
  val prop = Properties()
  prop["mail.smtp.host"] = "smtp.gmail.com"
  prop["mail.smtp.port"] = "587"
  prop["mail.smtp.auth"] = "true"
  prop["mail.smtp.starttls.enable"] = "true" //TLS

  val session = Session.getInstance(prop,
      object : javax.mail.Authenticator() {
        override fun getPasswordAuthentication(): PasswordAuthentication {
          return PasswordAuthentication(username, password)
        }
      })

  try {
    val mimeMessage = MimeMessage(session)
    mimeMessage.sender = InternetAddress(fromAddress)
    mimeMessage.setFrom(InternetAddress(fromAddress))
    mimeMessage.setRecipients(
        Message.RecipientType.TO,
        InternetAddress.parse(System.getenv("BASEBETA_USERNAME"))
    )
    mimeMessage.subject = newSubject
    mimeMessage.setText(message)
    Transport.send(mimeMessage)
  } catch (e: MessagingException) {
    e.printStackTrace()
  }
}

fun main(args: Array<String>) {
  server.start()
}


