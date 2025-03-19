from bs4 import BeautifulSoup
from core.domain.entities.contact_info import ContactInfo
from core.repositories.parser_interface import ParserInterface

class EducationOfficeParser(ParserInterface):
    def parse(self, html: str) -> ContactInfo:
        soup = BeautifulSoup(html, 'html.parser')
        address = soup.select_one("div:-soup-contains('Адрес') + div")
        phones = [a.text for a in soup.select('a[href^="tel:"]')]
        emails = [a.text for a in soup.select('a[href^="mailto:"]')]
        
        return ContactInfo(
            address.text.strip() if address else 'Не указан',
            list(set(phones)),
            emails[0] if emails else 'Не указан'
        )