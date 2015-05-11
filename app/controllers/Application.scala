package controllers

import play.api.libs.json.{Json, Writes}
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def index2 = Action {
    Ok(views.html.index2())
  }

  def index3 = Action {
    Ok(views.html.index3())
  }

  def index4 = Action {
    Ok(views.html.index4())
  }

  def index5 = Action {
    Ok(views.html.index5())
  }

  def alunos = Action {
    Ok(Json.toJson(
      List(
        Aluno("hugo ", 10, 15),
        Aluno("rafael", 12, 13),
        Aluno("iaron", 2, 23),
        Aluno("silva", 7, 3),
        Aluno("hugo ", 3, 6),
        Aluno("rafael", 8, 34),
        Aluno("iaron", 13, 7),
        Aluno("silva", 10, 45),
        Aluno("hugo ", 8, 8),
        Aluno("rafael", 10, 12),
        Aluno("iaron", 9, 23),
        Aluno("silva", 10, 21),
        Aluno("hugo ", 10, 15),
        Aluno("rafael", 12, 13),
        Aluno("iaron", 2, 23),
        Aluno("silva", 7, 3),
        Aluno("hugo ", 3, 6),
        Aluno("rafael", 8, 34),
        Aluno("iaron", 13, 7),
        Aluno("silva", 10, 45),
        Aluno("hugo ", 8, 8),
        Aluno("rafael", 10, 12),
        Aluno("iaron", 9, 23),
        Aluno("silva", 10, 21)
      )))
    //    BadRequest
  }

  implicit val creatureWrites = new Writes[Aluno] {
    def writes(c: Aluno) = {
      Json.obj(
        "nome" -> c.nome,
        "open" -> c.open,
        "closed" -> c.closed
      )
    }
  }
}

case class Aluno(val nome: String, val open: Int, val closed: Int)