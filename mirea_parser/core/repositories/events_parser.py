from bs4 import BeautifulSoup
from core.domain.entities.event import Event
from core.repositories.parser_interface import ParserInterface

class EventsParser(ParserInterface):
    def parse(self, html: str) -> list[Event]:
        soup = BeautifulSoup(html, 'html.parser')
        events = []
        for card in soup.select('.event-card, .event'):
            title = card.select_one('.title').text.strip()
            date = card.select_one('.date').text.strip()
            link = card.select_one('a')['href']
            events.append(Event(title, date, link))
        return events