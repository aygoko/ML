from bs4 import BeautifulSoup
from core.domain.entities.contacts_list import ContactsList
from core.repositories.parser_interface import ParserInterface

class ContactsParser(ParserInterface):
    def parse(self, html: str) -> ContactsList:
        soup = BeautifulSoup(html, 'html.parser')
        contacts = {}
        for item in soup.select('.contact-item'):
            name = item.select_one('h4, .name').text.strip()
            phone = item.select_one('.phone').text.strip()
            contacts[name] = phone
        return ContactsList(contacts)