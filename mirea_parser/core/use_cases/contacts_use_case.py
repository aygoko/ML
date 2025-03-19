from core.data_sources.http_repository import HttpRepository
from core.repositories.contacts_parser import ContactsParser
from core.use_cases.use_case import UseCase

class ContactsUseCase(UseCase):
    def __init__(self):
        url = "https://tel.mirea.ru/"
        parser = ContactsParser()
        repository = HttpRepository()
        super().__init__(repository, parser, url)