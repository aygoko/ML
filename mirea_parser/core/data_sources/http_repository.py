import logging
import requests
from core.data_sources.repository_interface import RepositoryInterface

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class HttpRepository(RepositoryInterface):
    def get_data(self, url: str) -> str | None:
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            return response.text
        except requests.exceptions.RequestException as e:
            logger.error(f"Ошибка при запросе {url}: {e}")
            return None