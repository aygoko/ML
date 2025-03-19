from bs4 import BeautifulSoup
from core.domain.entities.course import Course
from core.repositories.parser_interface import ParserInterface

class AutoSchoolParser(ParserInterface):
    def parse(self, html: str) -> list[Course]:
        soup = BeautifulSoup(html, 'html.parser')
        courses = []
        for item in soup.select('.course-item, .item-course'):
            title = item.select_one('h3, h4').text.strip()
            price = item.select_one('.price, .cost').text.strip()
            courses.append(Course(title, price))
        return courses