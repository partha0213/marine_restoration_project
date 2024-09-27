import logging

class LoggingService:
    def __init__(self):
        self.logger = logging.getLogger("app_logger")

    def log(self, message):
        self.logger.info(message)
