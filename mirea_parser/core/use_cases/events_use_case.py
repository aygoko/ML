from core.data_sources.http_repository import HttpRepository
from core.repositories.events_parser import EventsParser
from core.use_cases.use_case import UseCase

class EventsUseCase(UseCase):
    def __init__(self):
        url = "https://priem.mirea.ru/events/"
        parser = EventsParser()
        repository = HttpRepository()
        super().__init__(repository, parser, url)