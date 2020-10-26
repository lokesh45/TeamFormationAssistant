import warnings
import unittest
import pytest
from unittest.mock import MagicMock, patch
import TeamAssigner
import pandas as pd
import mysql.connector

class testTeamAssigner(unittest.TestCase):
    
  def testSetEmployeeAssignment(self):

    testSQL ="UPDATE Member SET IsAssigned= %s WHERE MemberId = %s ;"
    with patch(target='mysql.connector.connect') as mock:
      TeamAssigner.setEmployeeAssignement(1, mock)
      mockCursor = mock.cursor()

    self.assertIsNotNone(mock)
    self.assertTrue(mock.commit.called)
    mockCursor.execute.assert_called_once_with(testSQL, (1,1))
    self.assertTrue(mockCursor.execute.called)
    self.assertTrue(mock.is_connected.called)


if __name__ == '__main__':
  unittest.main()

