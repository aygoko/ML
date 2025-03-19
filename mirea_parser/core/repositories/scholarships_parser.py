from bs4 import BeautifulSoup
from core.domain.entities.scholarship_details import ScholarshipDetails
from core.repositories.parser_interface import ParserInterface

class ScholarshipsParser(ParserInterface):
    def parse(self, html: str) -> ScholarshipDetails:
        soup = BeautifulSoup(html, 'html.parser')
        conditions = soup.select_one("section:-soup-contains('Условия')")
        deadlines = soup.select_one("section:-soup-contains('Сроки')")
        amounts = soup.select_one("section:-soup-contains('Размеры')")
        
        return ScholarshipDetails(
            conditions.text.strip() if conditions else 'Не указано',
            deadlines.text.strip() if deadlines else 'Не указано',
            amounts.text.strip() if amounts else 'Не указано'
        )